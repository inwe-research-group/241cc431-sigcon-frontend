import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitante } from '../model/solicitante';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SolicitanteService {
  constructor(private http: HttpClient) {}

  getSolicitantes(): Observable<Solicitante[]> {
    return this.http.get<Solicitante[]>(`${BASE_URL}/solicitante/listar`);
  }
  registrarSolicitante(form: any) {
    return this.http.post(`${BASE_URL}/solicitante/insert`, form);
  }

  actualizarSolicitante(form: any) {
    return this.http.post(`${BASE_URL}/solicitante/update`, form);
  }

  eliminarSolicitante(solicitante: Solicitante) {
    return this.http.delete(`${BASE_URL}/solicitante/delete`, {
      body: solicitante,
    });
  }
}
