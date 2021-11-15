import { Media } from "./Media.js";

class Movie extends Media {

    constructor(title,releaseDate,rating,img,desc,director, actors, duration){
        super(title,releaseDate,rating,img,desc);
        this.id=Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        this.director=director;
        this.actors=actors;
        this.duration=duration;
        this.categorie='Movie';

    }

}

export {Movie}