import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  mostrarDatos!: boolean;
  schoolsList:any;
  sectionEdu:any;
  




  constructor(private datosPortfolio:PortfolioService) { }
  onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.schoolsList=data.schools;
      this.sectionEdu=data;
    });
  }

}
