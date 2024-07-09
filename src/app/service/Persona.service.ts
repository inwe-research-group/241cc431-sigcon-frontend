import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${BASE_URL}/persona/listar`);
  }
  registrarPersona(form: any) {
    return this.http.post(`${BASE_URL}/persona/insert`, form);
  }

  actualizarPersona(form: any) {
    return this.http.post(`${BASE_URL}/persona/update`, form);
  }

  eliminarPersona(persona: Persona) {
    return this.http.delete(`${BASE_URL}/persona/delete`, {
      body: persona,
    });
  }
  searchByNDocumento(ndocumento: String): Observable<Persona[]> {
    return this.http.get<Persona[]>(
      `${BASE_URL}/persona/searchByNDocumento/${ndocumento}`
    );
  }
}
