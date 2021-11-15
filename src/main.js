import { Album } from "./models/Album.js";
import { Game } from "./models/Game.js";
import { Movie } from "./models/Movie.js";
import {Collection} from "./models/Collection.js";


let c = new Collection();


function initLoad(){
    let collection =localStorage.getItem("collection");
    if (collection != null) {

        collection = JSON.parse(collection);
        collection.forEach((media) => {
            console.log('log recup collection id :'+media.id)

            document.querySelector('#list').appendChild(mediaAsHTML(media));

        });
        c.tabMedia=collection;
        console.log(collection);
        console.log(c.tabMedia)
    }else{
        
        alert('Try Mediatek ! Add a new media !')
    

        
   }
}


function mediaAsHTML(media){
    let type=media.categorie;
    console.log('log id mediaAsHTML: '+media.id)
    let html = document.createElement('div');
    html.setAttribute('class', 'card w-25 cursor-p');
    html.setAttribute('id', 'card'+media.id);
    html.setAttribute('style', 'display:contents');


    switch (type) {
        case 'Game':
            
            html.innerHTML =  `
            <div class="card-body" >
                <img src="${media.img}" alt="image" width=100 height=100>
                <p>Type : <strong>Game</strong></p>
                <h5 class="card-title">${media.title}</h5>
                <p >Release Date : <strong>${media.releaseDate}</strong></p>
                <p >Rating : <strong>${media.rating}</strong></p>
                <p >Studio : <strong>${media.studio}</strong></p>
                <p >NbPLayers : <strong>${media.nbplayers}</strong></p>
                <p >Plot : <strong>${media.plot}</strong></p>

                <br>
                <h2 class="divider line one-line">Description</h2>
                <p >${media.desc}</p>                
                <button id="edit" type="edit" class="btn btn-success mt-2">Edit</button>
                <button id="del${media.id}" type="button" class="btn btn-danger mt-2">Delete</button>
            </div>
            
            `
            
        break;

        case 'Album':
        
            html.innerHTML =  `
            <div class="card-body" >
                <img src="${media.img}" alt="image" width=100 height=100>
                <p>Type : <strong>Album</strong></p>
                <h5 class="card-title">${media.title}</h5>
                <p >Release Date : <strong>${media.releaseDate}</strong></p>
                <p >Rating : <strong>${media.rating}</strong></p>
                <p >Artists : <strong>${media.artists}</strong></p>
                <p >NbTracks : <strong>${media.nbtracks}</strong></p>
                <br>
                <h2 class="divider line one-line">Description</h2>
                <p >${media.desc}</p>
                <button id="edit" type="edit" class="btn btn-success mt-2">Edit</button>
                <button id="del${media.id}" type="button" class="btn btn-danger mt-2">Delete</button>
            </div>
            
            `
        break;

        case 'Movie':
           
            html.innerHTML =  `
            <div class="card-body" >
                <img src="${media.img}" alt="image" width=100 height=100>
                <p>Type : <strong>Movie</strong></p>
                <h5 class="card-title">${media.title}</h5>
                <p >Release Date : <strong>${media.releaseDate}</strong></p>
                <p >Rating : <strong>${media.rating}</strong></p>
                <p >Director : <strong>${media.director}</strong></p>
                <p >Actors : <strong>${media.actors}</strong></p>                
                <p >Duration : <strong>${media.duration}</strong></p>

                <br>
                <h2 class="divider line one-line">Description</h2>
                <p >${media.desc}</p>
               

                <button id="edit" type="edit" class="btn btn-success mt-2">Edit</button>
                <button id="del${media.id}" type="button" class="btn btn-danger mt-2">Delete</button>
            </div>
            
            `
        break;
        

        default:
                console.error("catégorie d'article inconnue");
                break;
    
    }
    
    html.querySelector('#del'+media.id).addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('card'+media.id).remove();
        c.removeMedia(media);
    });

    html.querySelector('#edit').addEventListener('click', () => {
        console.log('edit');
    });
    

    return html
}

let close = document.getElementsByClassName('close')
    Array.prototype.forEach.call(close, function (el) {
            el.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector('#modalEdit').classList.remove('show')
            document.querySelector('#modalEdit').classList.add('d-none')
            document.querySelector('#modalDel').classList.remove('show')
            document.querySelector('#modalDel').classList.add('d-none')
        });
    });


document.getElementById("addMedia").addEventListener('click', () => {
    console.log('click');
    document.querySelector('#modalEdit').classList.add('show')
    document.querySelector('#modalEdit').classList.remove('d-none')

    document.getElementById('categorie').value= '';
    document.getElementById('title').value= '';
    document.getElementById('date').value= '';
    document.getElementById('rating').value= '';
    document.getElementById('desc').value= '';
    document.getElementById('image').value= '';
    document.getElementById('artists').value= '';
    document.getElementById('nbtracks').value= '';
    document.getElementById('director').value= '';
    document.getElementById('actors').value= '';
    document.getElementById('duration').value= '';
    document.getElementById('studio').value= '';
    document.getElementById('nbplayers').value= '';
    document.getElementById('plot').value= '';


});


document.getElementById("confirmEdit").addEventListener('click', (e) => {
    e.preventDefault();
    
    let categorie = document.getElementById("categorie").value;
    let image = document.getElementById("image").value;
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let rating = document.getElementById("rating").value;
    let description = document.getElementById("desc").value;
    let artists = document.getElementById("artists").value;
    let nbtracks = document.getElementById("nbtracks").value;
    let director = document.getElementById("director").value;
    let actors = document.getElementById("actors").value;
    let duration = document.getElementById("duration").value;
    let studio = document.getElementById("studio").value;
    let nbplayers = document.getElementById("nbplayers").value;
    let plot = document.getElementById("plot").value;
    if(categorie==''){
        alert('Categorie empty, precise it');
    }else{

    let m;
    switch (categorie) {
        case 'Game':
            if(studio=='' || nbplayers=='' || plot==''){
                alert('All "Game informations" must be precise');
                break;
            }else{
                m = new Game(title, date, rating, image, description, studio, nbplayers,plot);
                break;
            }
        case 'Album':
            if(artists=='' || nbtracks=='' ){
                alert('All "Album informations" must be precise');
                break;
            }else{
                m = new Album(title, date, rating, image, description, artists,nbtracks);
                break;
            }
        case 'Movie':
            if(director=='' || actors=='' || duration==''){
                alert('All "Movie informations" must be precise');
                break;
            }else{
                m = new Movie(title, date, rating, image, description, director,actors,duration);
                break;
            }

        default:
            console.log("catégorie non valide");
            break;
    }
    c.addMedia(m);
    //localStorage.setItem("collection",JSON.stringify(c.tabMedia));
    document.querySelector('#list').appendChild(mediaAsHTML(m));
    console.log(c.tabMedia);
    
    //console.log(categorie, title, date, rating, image, author, text, "saved");
    document.getElementById('modalEdit').classList.remove('show');
    document.getElementById('modalEdit').classList.add('d-none');
}
});


document.getElementById("defaulttri").addEventListener('click', (e) => {
    trierCat()

})
document.getElementById("gametri").addEventListener('click', (e) => {
    //document.getElementById("all").classList.add('active');
    trierCat("Game")

})
document.getElementById("movietri").addEventListener('click', (e) => {
    //document.getElementById("all").classList.add('active');
    trierCat("Movie")

})
document.getElementById("albumtri").addEventListener('click', (e) => {
    trierCat("Album")
})

function trierCat(categorie = undefined) {
    //genrerStudio();
    let m;
    let listMedia = document.querySelector("#list");
    while (listMedia.firstChild) {
        listMedia.removeChild(listMedia.lastChild);
    }
    //console.log(listMedia.childNodes, 'lA1');

    c.tabMedia.forEach(media => {

        switch (media['categorie']) {
            case 'Game':
                m = new Game(media['title'],
                media['releaseDate'],
                media['rating'],
                media['img'],
                media['desc'],
                media['studio'],
                media['nbplayers'],
                media['plot']
                );
                //console.log("jai cre Game", a['title']);

                break;

            case 'Movie':
                m = new Movie(media['title'],
                media['releaseDate'],
                media['rating'],
                media['img'],
                media['desc'],
                media['director'],
                media['actors'],

                media['duration']

                );
                break;
            case 'Album':
                m = new Album(media['title'],
                media['releaseDate'],
                media['rating'],
                media['img'],
                media['desc'],
                media['artists'],
                media['nbtracks']

                );
                break;
            default:
                console.error("catégorie d'article inconnue");
                break;
        }

        if (categorie === undefined || media['categorie'] === categorie) {
            listMedia.appendChild(mediaAsHTML(m));
        }
    });
    //console.log(listMedia.childNodes, 'lA2');

}



window.onload = () => {
    initLoad();
    trierCat();

}   