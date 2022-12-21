import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  mostrarDatos!: boolean;
  projectsList:any;
  sectionPro:any;

  constructor(private datosPortfolio:PortfolioService) { }
  onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.projectsList=data.projects;
      this.sectionPro=data;
    });
  }

}
