import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';
import { TipoDocumento } from '../model/tipo-documento';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  constructor(private http: HttpClient) {}
  getTipoDocumento(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(`${BASE_URL}/tipodocumento/listar`);
  }
}
