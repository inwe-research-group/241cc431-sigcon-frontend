import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../model/solicitud';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor(private http: HttpClient) {}

  getSolicituds(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${BASE_URL}/solicitud/listar`);
  }
  registrarSolicitud(form: any) {
    return this.http.post(`${BASE_URL}/solicitud/insert`, form);
  }

  actualizarSolicitud(form: any) {
    return this.http.post(`${BASE_URL}/solicitud/update`, form);
  }

  eliminarSolicitud(Solicitud: Solicitud) {
    return this.http.delete(`${BASE_URL}/solicitud/delete`, {
      body: Solicitud,
    });
  }
}
