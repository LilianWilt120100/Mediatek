import { Media } from "./Media.js";

class Album extends Media {
    constructor(title,releaseDate,rating,img,desc,artists, nbtracks){
        super(title,releaseDate,rating,img,desc);
        this.id=Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); 
        this.artists=artists;
        this.nbtracks=nbtracks;
        this.categorie='Album';

    }
}

export {Album}
