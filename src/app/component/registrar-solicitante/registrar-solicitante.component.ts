import { Component } from '@angular/core';
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

@Component({
  selector: 'app-registrar-solicitante',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-solicitante.component.html',
  styleUrl: './registrar-solicitante.component.css',
})
export class RegistrarSolicitanteComponent {
  solicitanteForm: FormGroup;
  tipodocumentoArray: TipoDocumento[] = [];
  personaArray: Persona[] = [];
  isFormSubmitted: boolean = false;

  constructor(
    private solicitanteService: SolicitanteService,
    private personaService: PersonaService,
    private tipodocumentoService: TipoDocumentoService
  ) {
    this.solicitanteForm = new FormGroup({
      id_persona: new FormControl(''),
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
      telefono: new FormControl(''),
      correo: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.solicitanteForm.controls['id_tipo_documento'].setValue(1);
  }

  seleccionarTipoDocumento(event: Event): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitante....',
      text: '!Falta implementacion!',
    });
  }

  buscarDNI(): void {
    const n_documento = this.solicitanteForm.get('n_documento')?.value;
    console.log('Result', n_documento);
    this.personaService.searchByNDocumento(n_documento).subscribe(
      (result: any) => {
        console.log('Result', result);
        this.personaArray = result;
        this.solicitanteForm.setValue({
          id_persona: this.personaArray[0].id_persona,
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

  registrarSolicitante(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitante....',
      text: '!Falta implementacion!',
    });
  }

  cancelarRegistro(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitante....',
      text: '!Falta implementacion!',
    });
  }
}
