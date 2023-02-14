export class Educacion {

    id?: number;
    level: String;
    instituto: String;
    career: String;
    title: String;
    start: String;
    end: String;
    imglog: String;
    personaId: number;

    constructor
        (level: String,
            instituto: String,
            career: String,
            title: String,
            start: String,
            end: String,
            imglog: String,
            personaId: number) {

        this.level = level;
        this.instituto = instituto;
        this.career = career;
        this.title = title;
        this.start = start;
        this.end = end;
        this.imglog = imglog;
        this.personaId = personaId;
    }
}
