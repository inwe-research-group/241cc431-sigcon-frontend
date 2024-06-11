import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio';
import { getConexionBackend } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  BASE_URL: string | undefined;
  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
  }
  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.BASE_URL}/servicio/listar`);
  }
}
