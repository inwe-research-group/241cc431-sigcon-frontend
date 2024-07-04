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

  seleccionarTipoDocumento(event: Event): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitante....',
      text: '!Falta implementacion!',
    });
  }

  buscarDNI(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'buscarDNI....',
      text: '!Falta implementacion!',
    });
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
