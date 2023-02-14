import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Acercademi } from '../model/acercademi';
import { PortfolioService } from '../portfolio.service';
import { AcercademiService } from '../serviciosmodel/acercademi.service';


@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  mostrarDatos!: boolean;
  personasList:any;
  perso: Acercademi = null;
  id: number;
  

  constructor(private datosPortfolio:PortfolioService, private demiService: AcercademiService, private activatedRouter: ActivatedRoute) {
    
   }

   onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {


    this.cargarSobremi();

    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      });

   }

  cargarSobremi():void{
    this.demiService.verPersonas().subscribe(data =>{
      console.log(data)
      this.personasList=data;
    });
   }


   onUpdate(): void{
    const perso = this.activatedRouter.snapshot.params['id'];
    this.demiService.crearPersona(this.perso).subscribe(data => {
    window.location.reload();
    
      
      
    });
  }

   

}
