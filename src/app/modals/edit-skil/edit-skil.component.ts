import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';

@Component({
  selector: 'app-edit-skil',
  templateUrl: './edit-skil.component.html',
  styleUrls: ['./edit-skil.component.css']
})
export class EditSkilComponent implements OnInit {
  skilsList:any;
  redesList:any;
  schoolsList:any;
  experiencesList:any;
  projectsList:any;


  

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.redesList=data.redes;
    });
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.skilsList=data.skils
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
  }

}
