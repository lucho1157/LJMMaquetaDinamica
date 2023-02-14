export class Proyectos {

    id?: number;
    name: String;
    text: String;
    imglog: String;
    personaId: number;

    constructor(
        name: String,
        text: String,
        imglog: String,
        personaId: number) {

        this.name = name;
        this.text = text;
        this.imglog = imglog;
        this.personaId = personaId;
        }
}
