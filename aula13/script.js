var foto = document.querySelector("#foto");
var horas = document.querySelector("#horas");

foto.src = "noite.jpg"


var agora = new Date();
var hora = agora.getHours();

horas.textContent = `Agora são ${hora} horas.`;

if (hora<6){
    foto.src = "noite.jpg"
} else if (hora <12){
    foto.src = "manha.jpg"
} else if (hora < 18){
    foto.src = "tarde.jpg"
} else {
    foto.src = "noite.jpg"
}