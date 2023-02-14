import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/serviciosmodel/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {

  form: FormGroup;

  name: '';
  text: '';
  imglog: '';

  proye: Proyectos = null;
  
  constructor(private formBuilder: FormBuilder, private proyeService: ProyectosService , private activatedRouter: ActivatedRoute,
    private router: Router) { 

      this.form= this.formBuilder.group({
        name:['',[Validators.required]],
        text:['',[Validators.required, Validators.minLength(150), Validators.maxLength(500)]],
        imglog:['', [Validators.required]],
      })
    }

  ngOnInit(): void {
    
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyeService.getById(id).subscribe(data =>{
      console.log(data);
      this.proye=data;
    }, err =>{
      alert("error al modificar proyecto");
      window.location.reload();
    });
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
  

  onUpdate(): void{
    const proye = this.activatedRouter.snapshot.params['id'];
    this.proyeService.crearProyecto(this.proye).subscribe(data => {
      alert("El proyecto fue modificado");
      this.router.navigate(['']);
    }, err =>{
      alert("error no acepta acento ortográfico ni 'ñ'");
    });
    sessionStorage.clear();
  }

}
