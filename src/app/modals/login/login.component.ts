import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarDatos!: boolean;
  form: FormGroup;
  

  constructor
  (private formBuilder: FormBuilder,
    private datosPortfolio:PortfolioService, private autService: AutenticacionService) {
     ///Creamos el grupo de controles para el formulario de login
     this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
   }

  ngOnInit(): void {
    
  }
  

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    this.autService.loginUsuario(this.form.value).subscribe(data =>
      {
        console.log("DATA: Correo y password OCULTOS" + JSON.stringify(data));

        if (sessionStorage.getItem("currentUser") == "null"){
          this.mostrarDatos = false;
        }else {
          this.mostrarDatos = true;
          this.datosPortfolio.disparadorDeEdicion.emit({
            data:this.mostrarDatos=true})
        }
      })
      //this.ruta.navigate([''])
      
 
    

    
 
  }

  

}

