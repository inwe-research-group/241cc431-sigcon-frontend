/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PersonaService } from './Persona.service';
import { BASE_URL } from '../utils/constants';
import { TipoDocumento } from '../model/tipo-documento';
import { Ubigeo } from '../model/ubigeo';

describe('Service: Persona', () => {
  let service: PersonaService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonaService],
    });
    service = TestBed.inject(PersonaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([PersonaService], (service: PersonaService) => {
    expect(service).toBeTruthy();
  }));

  it('should searchByNDocument', () => {
    const tipo_documento: TipoDocumento = {
      id_tipo_documento: 1,
      descripcion: 'DNI',
    };
    const ubigeo: Ubigeo = {
      idubigeo: '070104',
      departamento: 'Callao',
      provincia: 'La Perla',
      distrito: 'La Perla',
    };
    const mockPersona = [
      {
        id_persona: 1,
        apellido_paterno: 'TEST_APEPATERNO',
        apellido_materno: 'TEST_APEMATERNO',
        nombres: 'TEST_NOMBRES',
        fecha_nacimiento: new Date('1992-04-05'),
        id_tipo_documento: 1,
        ndocumento: '55556667',
        direccion: 'Av. Guardia Chalaca 565',
        idubigeo: '070104',
        tipo_documento: tipo_documento,
        ubigeo: ubigeo,
      },
    ];

    service.searchByNDocumento('55556667').subscribe((data) => {
      expect(data).toEqual(mockPersona);
      expect(data[0].id_persona).toEqual(mockPersona[0].id_persona);
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toEqual(1);
      expect(data[0].id_persona).toEqual(1);
    });

    const req = httpMock.expectOne(
      `${BASE_URL}/persona/searchByNDocumento/${mockPersona[0].ndocumento}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockPersona);
    httpMock.verify();
  });
});
