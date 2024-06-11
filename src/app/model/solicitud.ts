import { Predio } from './predio';
import { Solicitante } from './solicitante';
import { Servicio } from './servicio';
export interface Solicitud {
  id_solicitud: number;
  id_predio: number;
  id_solicitante: number;
  id_servicio: number;
  area_predio: number;
  num_casas: number;
  cant_acomunes: number;
  area_acomunes: number;
  cant_vigilantes: number;
  cant_plimpieza: number;
  cant_administracion: number;
  cant_jardineria: number;
  fecha_solicitud: number;
  predio: Predio;
  solicitante: Solicitante;
  servicio: Servicio;
}
