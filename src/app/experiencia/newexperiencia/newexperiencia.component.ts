import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/serviciosmodel/experiencia.service';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {

  form: FormGroup;

  empresa: '';
  puesto1: '';
  puesto2: '';
  puesto3: '';
  puesto4: '';
  tarea: '';
  herramientas: '';
  start: '';
  end: '';
  imglog: '';
  personaId: 1;

  

  constructor(private formBuilder: FormBuilder, private experienciaService: ExperienciaService) {
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

  ngOnInit(): void {
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

  onCreate(): void {
    const expe = new Experiencia(this.empresa, this.puesto1, this.puesto2, this.puesto3, this.puesto4, this.tarea, this.herramientas, this.start, this.end, this.imglog, this.personaId);
    this.experienciaService.crearExperiencia(expe).subscribe(data => {
      alert("Experiencia Agregada");
      window.location.reload();
    });
  }

  limpiar(event: Event): void{
    this.form.reset();
  }

  onEnv(event: Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
    }else{
      alert("falló la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
