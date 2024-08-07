import { Persona } from './Persona';
import { Rol } from './rol';

export interface Solicitante {
  id_solicitante: number;
  id_persona: number;
  id_rol: number;
  correo: string;
  telefono: number;
  persona: Persona;
  rol: Rol;
}
