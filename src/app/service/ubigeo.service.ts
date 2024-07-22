import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../model/ubigeo';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class UbigeoService {
  constructor(private http: HttpClient) {}
  getUbigeo(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${BASE_URL}/ubigeo/listar`);
  }
}
