export class Habilidades {

    id: number;
    habilidad: String;
    porcentaje: number;
    personaId: number;

    constructor(habilidad: String, porcentaje: number, personaId: number) {
      
       this.habilidad = habilidad;
       this.porcentaje = porcentaje;
       this.personaId = personaId;
       
       }
}
