import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { TipoDocumento } from '../../model/tipo-documento';
import { Persona } from '../../model/Persona';
import { PersonaService } from '../../service/Persona.service';
import { SolicitanteService } from '../../service/solicitante.service';
import { TipoDocumentoService } from '../../service/tipo-documento.service';
import { Solicitante } from '../../model/solicitante';

@Component({
  selector: 'app-registrar-solicitante',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-solicitante.component.html',
  styleUrl: './registrar-solicitante.component.css',
})
export class RegistrarSolicitanteComponent {
  @Output() id_solicitante_out = new EventEmitter<number>();
  solicitanteForm: FormGroup;
  tipodocumentoArray: TipoDocumento[] = [];
  personaArray: Persona[] = [];
  solicitanteArray: Solicitante[] = [];
  isIdSolicitante: boolean = false;

  constructor(
    private solicitanteService: SolicitanteService,
    private personaService: PersonaService,
    private tipodocumentoService: TipoDocumentoService
  ) {
    this.solicitanteForm = new FormGroup({
      id_solicitante: new FormControl(''),
      id_persona: new FormControl(''),
      id_rol: new FormControl(''),
      apellido_paterno: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      apellido_materno: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      nombres: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      id_tipo_documento: new FormControl('1'),
      n_documento: new FormControl(''),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(9),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.solicitanteForm.controls['id_tipo_documento'].setValue(1);
    this.isIdSolicitante = false;
  }

  seleccionarTipoDocumento(event: Event): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitante....',
      text: '!Falta implementacion!',
    });
  }

  buscarPersonaDNI(): void {
    const n_documento = this.solicitanteForm.get('n_documento')?.value;
    console.log('n_documento', n_documento);
    this.personaService.searchByNDocumento(n_documento).subscribe(
      (result: any) => {
        console.log('Result', result);
        this.personaArray = result;
        this.solicitanteForm.setValue({
          id_solicitante: 0,
          id_persona: this.personaArray[0].id_persona,
          id_rol: 1,
          apellido_paterno: this.personaArray[0].apellido_paterno,
          apellido_materno: this.personaArray[0].apellido_materno,
          nombres: this.personaArray[0].nombres,
          id_tipo_documento: this.personaArray[0].id_tipo_documento,
          n_documento: this.personaArray[0].ndocumento,
          telefono: '',
          correo: '',
        });
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'buscarDNI....',
          text: '!Ah ocurrido un error al recuperar ndocumento!',
        });
      }
    );
  }

  buscarDNI(): void {
    const n_documento = this.solicitanteForm.get('n_documento')?.value;
    console.log('n_documento', n_documento);
    this.solicitanteService.searchByPersonaNDocumento(n_documento).subscribe(
      (result: any) => {
        console.log(result);
        this.solicitanteArray = result;
        if (this.solicitanteArray.length == 0) {
          this.buscarPersonaDNI();
          this.isIdSolicitante = true;
        } else {
          this.solicitanteForm.setValue({
            id_solicitante: this.solicitanteArray[0].id_solicitante,
            id_persona: this.solicitanteArray[0].id_persona,
            id_rol: this.solicitanteArray[0].id_rol,
            apellido_paterno: this.solicitanteArray[0].persona.apellido_paterno,
            apellido_materno: this.solicitanteArray[0].persona.apellido_materno,
            nombres: this.solicitanteArray[0].persona.nombres,
            id_tipo_documento:
              this.solicitanteArray[0].persona.id_tipo_documento,
            n_documento: this.solicitanteArray[0].persona.ndocumento,
            telefono: this.solicitanteArray[0].telefono,
            correo: this.solicitanteArray[0].correo,
          });
          this.id_solicitante_out.emit(this.solicitanteArray[0].id_solicitante);
        }
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'buscarDNI....',
          text: '!Ah ocurrido un error al recuperar ndocumento!',
        });
      }
    );
  }

  getTipoDocumento(): void {
    this.tipodocumentoService.getTipoDocumento().subscribe(
      (result: any) => {
        this.tipodocumentoArray = result;
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia....',
          text: '!Ah ocurrido un error al recuperar tipodocumento!',
        });
      }
    );
  }

  registrarSolicitante() {
    const solicitanteDto = {
      id_solicitante: 0,
      id_persona: this.solicitanteForm.get('id_persona')?.value,
      id_rol: 1,
      telefono: this.solicitanteForm.get('telefono')?.value,
      correo: this.solicitanteForm.get('correo')?.value,
    };
    this.solicitanteService.registrarSolicitante(solicitanteDto).subscribe(
      (result: any) => {
        console.log(result);
        this.id_solicitante_out.emit(result.id_solicitante);
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'registrarSolicitante....',
          text: '!Se registro exitosamente los datos del solicitante!',
        });
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia....',
          text: '!Ah ocurrido un error al registrar Solicitante!',
        });
      }
    );
  }

  cancelarRegistro(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'cancelarRegistro....',
      text: '!Falta implementacion!',
    });
  }
}
