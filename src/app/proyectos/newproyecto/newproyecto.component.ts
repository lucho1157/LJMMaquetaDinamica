import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/serviciosmodel/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {

  form: FormGroup;

  name: '';
  text: '';
  imglog: '';
  personaId: 1;

  constructor(private formBuilder: FormBuilder, private proyeService: ProyectosService) {

    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      text:['',[Validators.required, Validators.minLength(150), Validators.maxLength(500)]],
      imglog:['', [Validators.required]],
      personaId:['', [Validators.required, Validators.min(1), Validators.max(1)]],
   })
   }

  ngOnInit(): void {
  }

  get Name(){
    return this.form.get("name");
  }
 
  get Text(){
   return this.form.get("text");
  }

  get Imglog(){
    return this.form.get("imglog");
   }

  get PersonaId(){
    return this.form.get("personaId");
   }

  onCreate(): void {
    const proye = new Proyectos(this.name, this.text, this.imglog, this.personaId);
    this.proyeService.crearProyecto(proye).subscribe(data => {
      alert("Proyecto Agregado");
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
