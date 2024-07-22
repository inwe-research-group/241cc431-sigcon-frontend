import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { PredioService } from '../../service/predio.service';
import { Predio } from '../../model/predio';
import { Ubigeo } from '../../model/ubigeo';
import { UbigeoService } from '../../service/ubigeo.service';

@Component({
  selector: 'app-registrar-predio',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-predio.component.html',
  styleUrl: './registrar-predio.component.css',
})
export class RegistrarPredioComponent {
  @Output() id_predio_out = new EventEmitter<number>();
  predioForm: FormGroup;
  predioArray: Predio[] = [];
  ubigeoArray: Ubigeo[] = [];

  constructor(
    private predioService: PredioService,
    private ubigeoService: UbigeoService
  ) {
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

  ngOnInit(): void {
    this.getUbigeo();
    //this.personaForm.controls['id_tipo_documento'].setValue(1);
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

  searchByRuc(): void {
    const ruc = this.predioForm.get('ruc')?.value;
    this.predioService.searchByRuc(ruc).subscribe(
      (result: any) => {
        this.predioArray = result;
        this.predioForm.setValue({
          id_predio: this.predioArray[0].id_predio,
          ruc: this.predioArray[0].ruc,
          descripcion: this.predioArray[0].descripcion,
          direccion: this.predioArray[0].direccion,
          idubigeo: this.predioArray[0].idubigeo,
        });
        this.id_predio_out.emit(this.predioArray[0].id_predio);
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'searchByRuc....',
          text: '!Ah ocurrido un error al recuperar datos del predio!',
        });
      }
    );
  }

  getUbigeo(): void {
    this.ubigeoService.getUbigeo().subscribe(
      (result: any) => {
        this.ubigeoArray = result;
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia....',
          text: '!Ah ocurrido un error al recuperar lista de ubigeos!',
        });
      }
    );
  }

  seleccionarUbigeo(event: Event): void {
    const inputChangeValue = (event.target as HTMLInputElement).value;
    this.predioForm.controls['idubigeo'].setValue(inputChangeValue);
  }
}
