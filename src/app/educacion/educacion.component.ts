import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from '../model/educacion';
import { PortfolioService } from '../portfolio.service';
import { EducacionService } from '../serviciosmodel/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  mostrarDatos!: boolean;
  schoolsList: Educacion[]=[];
  
  constructor(private datosPortfolio:PortfolioService, private educacionService:EducacionService,private activatedRouter: ActivatedRoute) { 

  }

  onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {

    this.cargarEducacion();
    
    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    
  }

  cargarEducacion():void{
    this.educacionService.verEducacion().subscribe(data =>{
      console.log(data);
      this.schoolsList=data;
    });
  }

}
