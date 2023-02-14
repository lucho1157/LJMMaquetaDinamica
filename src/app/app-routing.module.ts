import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercademiComponent } from './acercademi/edit-acercademi/edit-acercademi.component';
import { EditPerfilComponent } from './acercademi/edit-perfil/edit-perfil.component';
import { EditeducacionComponent } from './educacion/editeducacion/editeducacion.component';
import { EditexperienciaComponent } from './experiencia/editexperiencia/editexperiencia.component';
import { GuardGuard } from './guard.guard';
import { EdithabilidadesComponent } from './habilidades/edithabilidades/edithabilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditproyectosComponent } from './proyectos/editproyectos/editproyectos.component';

const routes: Routes = [
  { path: 'editpersona/:id', component: EditAcercademiComponent, canActivate: [GuardGuard]},
  { path: 'editperfil/:id', component: EditPerfilComponent, canActivate: [GuardGuard]},
  { path: 'edithabi/:id', component: EdithabilidadesComponent, canActivate: [GuardGuard]},
  { path: 'editproye/:id', component: EditproyectosComponent, canActivate: [GuardGuard]},
  { path: 'editeduca/:id', component: EditeducacionComponent, canActivate: [GuardGuard]},
  { path: 'editexp/:id', component: EditexperienciaComponent, canActivate: [GuardGuard]},
  { path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
