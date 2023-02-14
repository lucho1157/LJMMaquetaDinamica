import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercademi } from 'src/app/model/acercademi';
import { AcercademiService } from 'src/app/serviciosmodel/acercademi.service';

@Component({
  selector: 'app-edit-acercademi',
  templateUrl: './edit-acercademi.component.html',
  styleUrls: ['./edit-acercademi.component.css']
})
export class EditAcercademiComponent implements OnInit {

  form: FormGroup;
  about: '';
  perso: Acercademi = null;

  constructor(private formBuilder: FormBuilder, private demiService: AcercademiService, private activatedRouter: ActivatedRoute,
    private router: Router) {

      this.form = this.formBuilder.group({
        about: ['', [Validators.required, Validators.minLength(150), Validators.maxLength(500)]],
      })
     }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.demiService.buscarPersona(id).subscribe(data =>{
      console.log(data);
      this.perso=data;
    }, err =>{
      alert("error al modificar texto");
      this.router.navigate(['']);
    });
  }

  get About(){
    return this.form.get("about");
  }

  onUpdate(): void{
    const perso = this.activatedRouter.snapshot.params['id'];
    this.demiService.crearPersona(this.perso).subscribe(data => {
      alert("El texto fue modificado");
      this.router.navigate(['']);
    }, err =>{
      alert("error no acepta acento ortográfico ni 'ñ'");
    });
    sessionStorage.clear();
  }

}
