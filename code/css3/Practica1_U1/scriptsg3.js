var galeria3 = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg"
]

var imagenActual = 0;

document.getElementById("izquierda").addEventListener("click", pasarImagen);
document.getElementById("derecha").addEventListener("click", pasarImagen);


function pasarImagen() {
    var boton = this.id;
   
    if(boton == 'derecha') {
        imagenActual ++;
        if(imagenActual < 0) {
            imagenActual = galeria3.length +1; 
        }else if (imagenActual == galeria3.length -1) {
        document.getElementById("derecha").style.display = "none";
        }else if (imagenActual < 5) {
        document.getElementById("derecha").style.display = "";
            }
    } else {
        imagenActual --;
        if(imagenActual == galeria3.length -1) {
            document.getElementById("izquierda").style.display = "none";    
        } 
    }
    var imagenAMostrar = galeria3 [imagenActual];
    document.getElementById('imagen').src = 'Galeria_03/' + imagenAMostrar;
}