import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/serviciosmodel/habilidades.service';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {

  form: FormGroup;

  habilidad: '';
  porcentaje: 0;
  personaId: 1;
  

  constructor(private formBuilder: FormBuilder, private habiService: HabilidadesService) {

    this.form= this.formBuilder.group({
      habilidad:['',[Validators.required]],
      porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
      personaId:['', [Validators.required, Validators.min(1), Validators.max(1)]],
   })

   }

  ngOnInit(): void {
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }
 
  get Porcentaje(){
   return this.form.get("porcentaje");
  }

  get PersonaId(){
    return this.form.get("personaId");
   }

   get HabilidadValid(){
    return this.Habilidad.touched && !this.Habilidad.valid;
  }
 
  get PorcentajeValid(){
    return this.Porcentaje.touched && !this.Porcentaje.valid;
  }

  get PersonaIdValid(){
    return this.PersonaId.touched && !this.PersonaId.valid;
   }


  onCreate(): void{
    const habi = new Habilidades(this.habilidad, this.porcentaje, this.personaId);
    this.habiService.crearHabilidad(habi).subscribe(data => {
      alert("Habilidad Agregada");
      window.location.reload();
    }
    );
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


