import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/serviciosmodel/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  form: FormGroup;
  expe: Experiencia = null;
  id: number;

  constructor(private formBuilder: FormBuilder, private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { 

      this.form = this.formBuilder.group({
        empresa: ['', [Validators.required]],
        puesto1: ['', [Validators.required]],
        puesto2: [''],
        puesto3: [''],
        puesto4: [''],
        tarea: [''],
        herramientas: [''],
        start: ['', [Validators.required]],
        end: ['', [Validators.required]],
        imglog: [''],
        personaId: ['', [Validators.required, Validators.min(1), Validators.max(1)]],
  
      })
    }

    get Empresa(){
      return this.form.get("empresa");
    }
  
    get Puesto1(){
      return this.form.get("puesto1");
    }
  
    get Puesto2(){
      return this.form.get("puesto2");
    }
  
    get Puesto3(){
      return this.form.get("puesto3");
    }
  
    get Puesto4(){
      return this.form.get("puesto4");
    }
  
    get Tarea(){
      return this.form.get("tarea");
    }
  
    get Herramientas(){
      return this.form.get("herramientas");
    }
  
    get Start(){
      return this.form.get("start");
    }
  
    get End(){
      return this.form.get("end");
    }
  
    get Imglog(){
      return this.form.get("imglog");
    }

    get PersonaId(){
      return this.form.get("personaId");
     }

  ngOnInit(): void {

    this.cargarInfo(); 
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.getById(this.id).subscribe(
      data => {
        console.log(data);
        this.expe = data;
      }, () =>{
        
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id']; 
    this.experienciaService.editExperiencia(this.id, this.expe).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        window.location.reload();
      }
    )
   

  }
//metodo para traer la info de la ddbb
  cargarInfo(){
    this.experienciaService.getById(this.id).subscribe(data => {   
      this.expe = data;
    });
  }

}
