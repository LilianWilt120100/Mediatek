
class Collection {
    constructor(){
        this.tabMedia=[];
    }

    addMedia(media) {
        //this.tabMedia= JSON.parse(JSON.stringify(this.tabMedia));
        this.tabMedia.push(media);
        localStorage.setItem("collection", JSON.stringify(this.tabMedia));
        //console.log(this.tabMedia)
    }

    removeMedia(media){
        //this.tabMedia= JSON.parse(JSON.stringify(this.tabMedia));
        const idx = this.tabMedia.findIndex(element => element.title === media.title);
        this.tabMedia.splice(idx, 1);
       // console.log(this.tabMedia)
        localStorage.setItem("collection", JSON.stringify(this.tabMedia));
        //console.log(localStorage.getItem("collection"))

    }

    getPosMedia(media){
        return this.tabMedia.indexOf(media);
    }
}

export{Collection};