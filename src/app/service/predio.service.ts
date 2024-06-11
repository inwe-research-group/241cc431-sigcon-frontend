import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predio } from '../model/predio';
import { getConexionBackend } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class PredioService {
  BASE_URL: string | undefined;

  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
  }

  getPredios(): Observable<Predio[]> {
    return this.http.get<Predio[]>(`${this.BASE_URL}/Predio/listar`);
  }
  registrarPredio(form: any) {
    return this.http.post(`${this.BASE_URL}/Predio/insert`, form);
  }

  actualizarPredio(form: any) {
    return this.http.post(`${this.BASE_URL}/Predio/update`, form);
  }

  eliminarPredio(Predio: Predio) {
    return this.http.delete(`${this.BASE_URL}/Predio/delete`, {
      body: Predio,
    });
  }
}
