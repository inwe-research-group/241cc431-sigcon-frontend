import { Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { RegistrarPersonaComponent } from './component/registrar-persona/registrar-persona.component';
import { RegistrarSolicitanteComponent } from './component/registrar-solicitante/registrar-solicitante.component';
import { SolicitarCotizacionComponent } from './component/solicitar-cotizacion/solicitar-cotizacion.component';

export const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, //Indicamos que ni bien se ejecuta,se tenga la pagina1 de entrada
  { path: 'principal', component: PrincipalComponent },
  { path: 'solicitar-cotizacion', component: SolicitarCotizacionComponent },
  { path: 'registrar-persona', component: RegistrarPersonaComponent },
  { path: 'registrar-solicitante', component: RegistrarSolicitanteComponent },
];
