import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './components/materias/materias.component';
import { VistaComponent } from './components/vista/vista.component';
import { HorarioComponent } from './components/horario/horario.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path:'materias', component: MateriasComponent },
  { path:'profesores', component: VistaComponent },
  { path:'horario', component: HorarioComponent },
  { path:'inicio', component: InicioComponent },
  { path:'**', redirectTo:'/inicio', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }