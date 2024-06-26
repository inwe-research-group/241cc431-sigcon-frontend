import { TipoDocumento } from '../model/tipo-documento';
import { Ubigeo } from '../model/ubigeo';
export interface Persona {
  id_persona: number;
  apellido_paterno: string;
  apellido_materno: string;
  nombres: string;
  fecha_nacimiento: Date;
  id_tipo_documento: number;
  ndocumento: string;
  direccion: string;
  idubigeo: string;
  tipo_documento: TipoDocumento;
  ubigeo: Ubigeo;
}
