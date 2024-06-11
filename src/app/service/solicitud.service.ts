import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../model/solicitud';
import { getConexionBackend } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  BASE_URL: string | undefined;

  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
  }

  getSolicituds(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.BASE_URL}/solicitud/listar`);
  }
  registrarSolicitud(form: any) {
    return this.http.post(`${this.BASE_URL}/solicitud/insert`, form);
  }

  actualizarSolicitud(form: any) {
    return this.http.post(`${this.BASE_URL}/solicitud/update`, form);
  }

  eliminarSolicitud(Solicitud: Solicitud) {
    return this.http.delete(`${this.BASE_URL}/solicitud/delete`, {
      body: Solicitud,
    });
  }
}
