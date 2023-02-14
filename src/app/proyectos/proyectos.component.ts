import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from '../model/proyectos';
import { PortfolioService } from '../portfolio.service';
import { ProyectosService } from '../serviciosmodel/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  mostrarDatos!: boolean;
  projectsList: Proyectos[] = [];


  constructor(private datosPortfolio: PortfolioService, private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute) { }
  onShowHide(value: boolean) {
    this.mostrarDatos = value;
  }

  ngOnInit(): void {

    this.cargarProyecto();

    this.datosPortfolio.disparadorDeEdicion.subscribe(data => {
      this.mostrarDatos = true;
    })

  }

  cargarProyecto(): void {
    this.proyectosService.verProyectos().subscribe(data => {
      console.log(data);
      this.projectsList = data;
    });
  }

  onDelete(id: number) {
    
    var valor = confirm("Eliminar Proyecto ?");
    if (valor == true) {
      this.proyectosService.borrarProyecto(id).subscribe(
        data => {

          alert("Proyecto eliminado");
          window.location.reload();


        }, err => {
          alert("no se pudo eliminar proyecto")
        }
      )
    } else {
      alert("NO se eliminó proyecto")
    }

  }



}
