import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/serviciosmodel/experiencia.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {

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

  expe: Experiencia = null;

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

    })
  }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.getById(id).subscribe(data => {
      console.log(data);
      this.expe = data;
    }, err => {
      alert("error al modificar experiencia");
      this.router.navigate(['']);
    });
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

  onUpdate(): void {
    const expe = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.crearExperiencia(this.expe).subscribe(data => {
      alert("La experiencia fue modificada");
      this.router.navigate(['']);
    }, err => {
      alert("error");
    });
    sessionStorage.clear();
  }

}
