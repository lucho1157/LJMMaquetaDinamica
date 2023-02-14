import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/serviciosmodel/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  form: FormGroup;

  level: '';
  instituto: '';
  career: '';
  title: '';
  start: '';
  end: '';
  imglog: '';
  personaId: 1;


  constructor(private formBuilder: FormBuilder, private educacionService: EducacionService) {

    this.form= this.formBuilder.group({
      level:['',[Validators.required]],
      instituto:['',[Validators.required]],
      career:['', [Validators.required]],
      title: [''],
      start: [''],
      end: [''],
      imglog: [''],
      personaId:['', [Validators.required, Validators.min(1), Validators.max(1)]],
   })
   }

  ngOnInit(): void {
  }

  get Level(){
    return this.form.get("level");
  }
 
  get Instituto(){
   return this.form.get("instituto");
  }

  get Career(){
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

  get PersonaId(){
    return this.form.get("personaId");
   }

  onCreate(): void {
    const educ = new Educacion(this.level, this.instituto, this.career, this.title, this.start, this.end, this.imglog, this.personaId);
    this.educacionService.crearEducacion(educ).subscribe(data => {
      alert("Educacion Agregada");
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
