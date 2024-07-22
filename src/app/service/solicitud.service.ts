import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../model/solicitud';
import { SolicitudDto } from '../model/solicitudDto';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor(private http: HttpClient) {}

  getSolicituds(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${BASE_URL}/solicitud/listar`);
  }
  registrarSolicitud(solicitudDto: SolicitudDto): Observable<Solicitud> {
    return this.http.post<Solicitud>(
      `${BASE_URL}/solicitud/insert`,
      solicitudDto
    );
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
