import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { PortfolioService } from '../portfolio.service';
import { ExperienciaService } from '../serviciosmodel/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  mostrarDatos!: boolean;
  experiencesList:Experiencia[]=[];

  constructor(private datosPortfolio:PortfolioService, private experienciaService:ExperienciaService) {
    
   }

  onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {

    this.cargarExperiencia();
    
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    
  }

  cargarExperiencia():void{
    this.experienciaService.verExperiencias().subscribe(data =>{
      console.log(data);
      this.experiencesList=data;
    });
  }

}
