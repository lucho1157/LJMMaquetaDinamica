import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  mostrarDatos!: boolean;
  miPorfolio:any;

  constructor(private datosPortfolio:PortfolioService) {
    
   }

   onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        this.miPorfolio=data;
      });
  }

}
