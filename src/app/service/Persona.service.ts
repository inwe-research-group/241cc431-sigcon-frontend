import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getConexionBackend } from '../utils/constants';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  BASE_URL: string | undefined;

  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
  }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.BASE_URL}/persona/listar`);
  }
  registrarPersona(form: any) {
    return this.http.post(`${this.BASE_URL}/persona/insert`, form);
  }

  actualizarPersona(form: any) {
    return this.http.post(`${this.BASE_URL}/persona/update`, form);
  }

  eliminarPersona(persona: Persona) {
    return this.http.delete(`${this.BASE_URL}/persona/delete`, {
      body: persona,
    });
  }
}
