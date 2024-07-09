import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Predio } from '../model/predio';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class PredioService {
  constructor(private http: HttpClient) {}

  getPredios(): Observable<Predio[]> {
    return this.http.get<Predio[]>(`${BASE_URL}/Predio/listar`);
  }
  registrarPredio(form: any) {
    return this.http.post(`${BASE_URL}/Predio/insert`, form);
  }

  actualizarPredio(form: any) {
    return this.http.post(`${BASE_URL}/Predio/update`, form);
  }

  eliminarPredio(Predio: Predio) {
    return this.http.delete(`${BASE_URL}/Predio/delete`, {
      body: Predio,
    });
  }
}
