import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from 'src/app/serviciosmodel/habilidades.service';

@Component({
  selector: 'app-deletehabilidades',
  templateUrl: './deletehabilidades.component.html',
  styleUrls: ['./deletehabilidades.component.css']
})
export class DeletehabilidadesComponent implements OnInit {

  skilsList: any;
  id: number;

  constructor(private habiService: HabilidadesService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  datosDelet(id:number){
    var elem = document.getElementById('habili');
    var elem2 = document.getElementById('porcen');
    var elem3 = document.getElementById('perId');
    console.log(this.skilsList[id].id);
    elem?.setAttribute("value", this.skilsList[id].habilidad);
    elem2?.setAttribute("value", this.skilsList[id].porcentaje);
    elem3?.setAttribute("value", this.skilsList[id].personaId);
    
   }

}
