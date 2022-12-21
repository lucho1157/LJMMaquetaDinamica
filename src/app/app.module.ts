import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { HamburguesaComponent } from './hamburguesa/hamburguesa.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { EdicionComponent } from './edicion/edicion.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EditSkilComponent } from './modals/edit-skil/edit-skil.component';
import { FooterComponent } from './footer/footer.component';




const routes: Route[] = [
{ path: "login", component:LoginComponent },
{ path: "edicion", component:EdicionComponent },
{ path: "**", redirectTo: "" }];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    HamburguesaComponent,
    HabilidadesComponent,
    EdicionComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    EditSkilComponent,
    FooterComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
