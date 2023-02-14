export class Acercademi {

    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    banner: String;
    about: String;
    urlperfil: String;
  acercademi: any;
  persona: any;
    

    constructor(nombre: String, apellido: String, profesion: String, banner: String, 
        about: String, urlperfil: String) {
      
       this.nombre = nombre;
       this.apellido = apellido;
       this.profesion = profesion;
       this.banner = banner;
       this.about = about;
       this.urlperfil = urlperfil;
       
       
       }
}
