import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  mostrarDatos!: boolean;
  redesList:any;

  

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.mostrarDatos=false;
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.redesList=data.redes
      });
  }

}
