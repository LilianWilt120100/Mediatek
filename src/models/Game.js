import { Media } from "./Media.js";

class Game extends Media{

    constructor(title,releaseDate,rating,img,desc,studio,nbplayers,plot){
        super(title,releaseDate,rating,img,desc);
        this.id=Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        this.studio=studio;
        this.nbplayers=nbplayers;
        this.plot=plot; 
        this.categorie='Game';
    }
}

export {Game}
