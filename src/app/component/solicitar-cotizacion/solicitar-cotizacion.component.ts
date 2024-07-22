import { Component } from '@angular/core';
import { RegistrarSolicitanteComponent } from './../registrar-solicitante/registrar-solicitante.component';
import { RegistrarPredioComponent } from './../registrar-predio/registrar-predio.component';
import { SolicitudService } from '../../service/solicitud.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  n_solicitud = '';
  solicitudForm: FormGroup;

  constructor(private solicitudService: SolicitudService) {
    this.solicitudForm = new FormGroup({
      id_solicitud: new FormControl(''),
      id_predio: new FormControl('', [Validators.required]),
      id_solicitante: new FormControl('', [Validators.required]),
      id_servicio: new FormControl('1'),
      area_predio: new FormControl('', [Validators.required]),
      num_casas: new FormControl('', [Validators.required]),
      cant_acomunes: new FormControl('', [Validators.required]),
      area_acomunes: new FormControl('', []),
      cant_vigilantes: new FormControl('', []),
      cant_plimpieza: new FormControl('', []),
      cant_administracion: new FormControl('', []),
      cant_jardineria: new FormControl('', []),
      fecha_solicitud: new FormControl('', []),
    });
  }

  obtenerIdSolicitante(id_solicitante: number): void {
    console.log('obtenerIdSolicitante', id_solicitante);
    this.solicitudForm.controls['id_solicitante'].setValue(id_solicitante);
  }

  obtenerIdPredio(id_predio: number): void {
    console.log('obtenerIdPredio', id_predio);
    this.solicitudForm.controls['id_predio'].setValue(id_predio);
  }

  registrarSolicitud(): void {
    const solicitudDto = {
      id_solicitud: 0,
      id_predio: this.solicitudForm.get('id_predio')?.value,
      id_solicitante: this.solicitudForm.get('id_solicitante')?.value,
      id_servicio: 1,
      area_predio: this.solicitudForm.get('area_predio')?.value,
      num_casas: this.solicitudForm.get('num_casas')?.value,
      cant_acomunes: this.solicitudForm.get('cant_acomunes')?.value,
    };
    this.solicitudService.registrarSolicitud(solicitudDto).subscribe(
      (result: any) => {
        console.log(result);
        this.solicitudForm.controls['id_solicitud'].setValue(
          result.id_solicitud
        );
        this.n_solicitud = 'N° 000' + result.id_solicitud;
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'registrarSolicitud....',
          text: `Se ha generado la Solucitud N° 000${result.id_solicitud}`,
        });
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia....',
          text: '!Ah ocurrido un error al registrar la Solicitud!',
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
