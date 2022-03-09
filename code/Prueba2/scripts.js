var num=1;

function izquierda() {
    num++;
    if(num>6)
    num = 1;
    var foto=document.getElementById("foto");
    foto.src="foto"+num+".jpg";
}

function derecha() {
    num--;
    if(num<1)
    num = 1;
    var foto=document.getElementById("foto");
    foto.src="foto"+num+".jpg";
}