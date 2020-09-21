"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Ladscape"] = 0] = "Ladscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this.id}],
        title: ${this.title},
        orientation: ${this.orientation}`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, "Personal Picture");
const picture = new Picture(1, "Platzi", PhotoOrientation.Square);
album.addPicture(picture);
console.log("album", album);
// Accediendo a los miembros publicos
picture.id = 100; //public
picture.title = "Another title"; //public
album.title = "Personal Activities";
console.log(album);
