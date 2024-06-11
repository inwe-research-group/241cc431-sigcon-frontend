import { Component } from '@angular/core';
import { RegistrarSolicitanteComponent } from './../registrar-solicitante/registrar-solicitante.component';
import { RegistrarPredioComponent } from './../registrar-predio/registrar-predio.component';
import { SolicitudService } from '../../service/solicitud.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitar-cotizacion',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RegistrarSolicitanteComponent,
    RegistrarPredioComponent,
  ],
  templateUrl: './solicitar-cotizacion.component.html',
  styleUrl: './solicitar-cotizacion.component.css',
})
export class SolicitarCotizacionComponent {
  solicitudForm: FormGroup;

  constructor(private solicitudService: SolicitudService) {
    this.solicitudForm = new FormGroup({
      id_solicitud: new FormControl(''),
      id_predio: new FormControl(''),
      id_solicitante: new FormControl(''),
      id_servicio: new FormControl(''),
      area_predio: new FormControl('', []),
      num_casas: new FormControl('', []),
      cant_acomunes: new FormControl('', []),
      area_acomunes: new FormControl('', []),
      cant_vigilantes: new FormControl('', []),
      cant_plimpieza: new FormControl('', []),
      cant_administracion: new FormControl('', []),
      cant_jardineria: new FormControl('', []),
      fecha_solicitud: new FormControl('', []),
    });
  }

  registrarSolicitud(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitud....',
      text: '!Falta implementacion!',
    });
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
