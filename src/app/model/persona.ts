export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    banner: String;
    about: String;
    urlperfil: String;
    eHabilidad: String;
    Porcentaje: String;

    constructor(nombre: String, apellido: String, profesion: String, banner: String, 
        about: String, urlperfil: String, eHabilidad: String, Porcentaje: String) {
      
       this.nombre = nombre;
       this.apellido = apellido;
       this.profesion = profesion;
       this.banner = banner;
       this.about = about;
       this.urlperfil = urlperfil;
       this.eHabilidad = eHabilidad;
       this.Porcentaje = Porcentaje;
       
       }
}
