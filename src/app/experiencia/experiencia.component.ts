import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  mostrarDatos!: boolean;
  experiencesList:any;
  sectionExpe:any;

  constructor(private datosPortfolio:PortfolioService) { }
  onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experiencesList=data.experiences;
      this.sectionExpe=data;
    });
  }

}
