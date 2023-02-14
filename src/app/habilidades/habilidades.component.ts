import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habilidades } from '../model/habilidades';
import { PortfolioService } from '../portfolio.service';
import { HabilidadesService } from '../serviciosmodel/habilidades.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skilsList: Habilidades[]=[];
  mostrarDatos!: boolean;

  constructor(private datosPortfolio:PortfolioService, private habiService: HabilidadesService, private activatedRouter: ActivatedRoute) {
    
   }

   onShowHide(value: boolean){
    this.mostrarDatos = value;
   }

  ngOnInit(): void {

    this.cargarHabilidades();

    this.datosPortfolio.disparadorDeEdicion.subscribe( data => {
      this.mostrarDatos=true;
      })
    
  }

  cargarHabilidades():void{
    this.habiService.verHabilidad().subscribe(data =>{
      console.log(data);
      this.skilsList=data;
    });
  }


   onDelete(id:number){
    console.log ("hola");
    var valor = confirm("Eliminar Habilidad ?");
          if(valor == true){
      this.habiService.borrarHabilidad(id).subscribe(
        data =>{
          
            alert ("Habilidad eliminada");
            window.location.reload();
          
          
        }, err =>{
          alert("no se pudo eliminar habilidad")
        }
      )
    }else{
      alert("NO se eliminó habilidad")
    }
    
   }

}
