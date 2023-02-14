import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/serviciosmodel/habilidades.service';

@Component({
  selector: 'app-edithabilidades',
  templateUrl: './edithabilidades.component.html',
  styleUrls: ['./edithabilidades.component.css']
})
export class EdithabilidadesComponent implements OnInit {

  form: FormGroup;

  habilidad: '';
  porcentaje: 0;

  habi: Habilidades = null;

  constructor(private formBuilder: FormBuilder, private habiService: HabilidadesService, private activatedRouter: ActivatedRoute,
    private router: Router) {

      this.form= this.formBuilder.group({
        habilidad:['',[Validators.required]],
        porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
      })
     }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.habiService.getById(id).subscribe(data =>{
      console.log(data);
      this.habi=data;
    }, err =>{
      alert("error al modificar habilidad");
      this.router.navigate(['']);
    });
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }
 
  get Porcentaje(){
   return this.form.get("porcentaje");
  }

  onUpdate(): void{
    const habi = this.activatedRouter.snapshot.params['id'];
    this.habiService.crearHabilidad(this.habi).subscribe(data => {
      alert("La habilidad fue modificada");
      this.router.navigate(['']);
    }, err =>{
      alert("error");
    });
    sessionStorage.clear();
  }

}
