var num = 1;
document.getElementById("demo").innerHTML = "Hello World!";

function adelante() {
    num++;
    if (num > 6)
        num = 1;
    var foto = document.getElementById("foto");
    foto.src = "foto" + num + ".jpg";

}

function atras() {
    num--;
    if (num < 1)
        num = 6;
    var foto = document.getElementById("foto");
    foto.src = "foto" + num + ".jpg";

}