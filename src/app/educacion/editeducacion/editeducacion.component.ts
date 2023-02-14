import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/serviciosmodel/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {

  form: FormGroup;

  level: '';
  instituto: '';
  career: '';
  title: '';
  start: '';
  end: '';
  imglog: '';

  educ: Educacion = null;

  constructor(private formBuilder: FormBuilder, private educacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) {

    this.form = this.formBuilder.group({
      level: ['', [Validators.required]],
      instituto: ['', [Validators.required]],
      career: ['', [Validators.required]],
      title: [''],
      start: [''],
      end: [''],
      imglog: [''],
    })
  }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.getById(id).subscribe(data => {
      console.log(data);
      this.educ = data;
    }, err => {
      alert("error al modificar habilidad");
      this.router.navigate(['']);
    });
  }

  get Level() {
    return this.form.get("level");
  }

  get Instituto() {
    return this.form.get("instituto");
  }

  get Career() {
    return this.form.get("career");
  }

  get Title() {
    return this.form.get("title");
  }

  get Start() {
    return this.form.get("start");
  }

  get End() {
    return this.form.get("end");
  }

  get Imglog() {
    return this.form.get("imglog");
  }

  onUpdate(): void {
    const educ = this.activatedRouter.snapshot.params['id'];
    this.educacionService.crearEducacion(this.educ).subscribe(data => {
      alert("La educación fue modificada");
      this.router.navigate(['']);
    }, err => {
      alert("error");
    });
    sessionStorage.clear();
  }

}
