import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercademi } from 'src/app/model/acercademi';
import { AcercademiService } from 'src/app/serviciosmodel/acercademi.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  form: FormGroup;
  profesion: '';
  urlperfil: '';
  
  perso: Acercademi = null;

  constructor(private formBuilder: FormBuilder, private demiService: AcercademiService, private activatedRouter: ActivatedRoute,
    private router: Router) {

      this.form = this.formBuilder.group({
        profesion: ['', [Validators.required]],
        urlperfil: ['', [Validators.required]],
      })
     }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.demiService.buscarPersona(id).subscribe(data => {
      console.log(data);
      this.perso = data;
    }, err => {
      alert("error al modificar perfil");
      this.router.navigate(['']);
    });
  }

  get Profesion(){
    return this.form.get("profesion");
  }

  get Urlperfil(){
    return this.form.get("urlperfil");
  }

  onUpdate(): void {
    const perso = this.activatedRouter.snapshot.params['id'];
    this.demiService.crearPersona(this.perso).subscribe(data => {
      alert("El perfil fue modificado");
      this.router.navigate(['']);
    }, err => {
      alert("error");
    });
    sessionStorage.clear();
  }

}
