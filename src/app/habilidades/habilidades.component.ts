import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skilsList:any;
  mostrarDatos!: boolean;

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
      this.skilsList=data.skils
    });
  }

}
