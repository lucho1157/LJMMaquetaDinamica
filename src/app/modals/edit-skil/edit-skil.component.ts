import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';
import { AcercademiService } from 'src/app/serviciosmodel/acercademi.service';
import { HabilidadesService } from 'src/app/serviciosmodel/habilidades.service';

@Component({
  selector: 'app-edit-skil',
  templateUrl: './edit-skil.component.html',
  styleUrls: ['./edit-skil.component.css']
})
export class EditSkilComponent implements OnInit {
  personasList:any;
  skilsList:any;
  redesList:any;
  schoolsList:any;
  experiencesList:any;
  projectsList:any;


  

  constructor(private datosPortfolio:PortfolioService, private habilidadesService: HabilidadesService, private demiService: AcercademiService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.redesList=data.redes;
    });
    
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.schoolsList=data.schools;
    });
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experiencesList=data.experiences;
    });
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.projectsList=data.projects;
    });
    this.demiService.verPersonas().subscribe(data =>{
      console.log(data);
      this.personasList=data;
    });
  }

}
