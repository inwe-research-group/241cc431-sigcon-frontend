import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private http: HttpClient) {}
  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${BASE_URL}/servicio/listar`);
  }
}
