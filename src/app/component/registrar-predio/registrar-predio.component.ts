import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { PredioService } from '../../service/predio.service';

@Component({
  selector: 'app-registrar-predio',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-predio.component.html',
  styleUrl: './registrar-predio.component.css',
})
export class RegistrarPredioComponent {
  predioForm: FormGroup;

  constructor(private predioService: PredioService) {
    this.predioForm = new FormGroup({
      id_predio: new FormControl(''),
      ruc: new FormControl('', [Validators.required, Validators.minLength(4)]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      idubigeo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  registrarPredio(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'registrarSolicitante....',
      text: '!Falta implementacion!',
    });
  }
  buscarPredio(): void {
    Swal.close();
    Swal.fire({
      icon: 'warning',
      title: 'buscarPredio....',
      text: '!Falta implementacion!',
    });
  }
}
