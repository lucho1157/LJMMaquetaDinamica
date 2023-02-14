export class Redes {

    id?: number;
    nombre: String;
    urlred: String;
    personaId: number;

    constructor(nombre: String, urlred: String, personaId: number) {

        this.nombre = nombre;
        this.urlred = urlred;
        this.personaId = personaId;
    }
}
