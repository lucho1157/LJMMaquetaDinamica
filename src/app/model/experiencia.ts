export class Experiencia {

    id?: number;
    empresa: String;
    puesto1: String;
    puesto2: String;
    puesto3: String;
    puesto4: String;
    tarea: String;
    herramientas: String;
    start: String;
    end: String;
    imglog: String;
    personaId: number;

    constructor(empresa: String,
        puesto1: String,
        puesto2: String,
        puesto3: String,
        puesto4: String,
        tarea: String,
        herramientas: String,
        start: String,
        end: String,
        imglog: String,
        personaId: number) {

       this.empresa = empresa;
       this.puesto1 = puesto1;
       this.puesto2 = puesto2;
       this.puesto3 = puesto3;
       this.puesto4 = puesto4;
       this.tarea = tarea;
       this.herramientas = herramientas;
       this.start = start;
       this.end = end;
       this.imglog = imglog;
       this.personaId = personaId;
        }
}
