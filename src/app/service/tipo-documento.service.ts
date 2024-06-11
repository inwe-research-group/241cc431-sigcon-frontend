import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getConexionBackend } from '../utils/constants';
import { TipoDocumento } from '../model/tipo-documento';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  BASE_URL: string | undefined;
  constructor(private http: HttpClient) {
    this.BASE_URL = getConexionBackend();
  }
  getTipoDocumento(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(
      `${this.BASE_URL}/tipodocumento/listar`
    );
  }
}
