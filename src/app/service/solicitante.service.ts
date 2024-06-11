import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitante } from '../model/solicitante';
import { getConexionBackend } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SolicitanteService {
  BASE_URL: string | undefined;

  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
  }

  getSolicitantes(): Observable<Solicitante[]> {
    return this.http.get<Solicitante[]>(`${this.BASE_URL}/solicitante/listar`);
  }
  registrarSolicitante(form: any) {
    return this.http.post(`${this.BASE_URL}/solicitante/insert`, form);
  }

  actualizarSolicitante(form: any) {
    return this.http.post(`${this.BASE_URL}/solicitante/update`, form);
  }

  eliminarSolicitante(solicitante: Solicitante) {
    return this.http.delete(`${this.BASE_URL}/solicitante/delete`, {
      body: solicitante,
    });
  }
}
