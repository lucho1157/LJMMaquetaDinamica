import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { RedesService } from '../serviciosmodel/redes.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  mostrarDatos!: boolean;
  redesList:any;

  

  constructor(private datosPortfolio:PortfolioService, private redesService:RedesService) { }

  ngOnInit(): void {

    this.cargarHabilidades();

    this.mostrarDatos=false;
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    
  }

  cargarHabilidades():void{
    this.redesService.verRedes().subscribe(data =>{
      console.log(data);
      this.redesList=data;
    });
  }

}
