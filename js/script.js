//Guardamos las imagenes y su información en constantes
let images = document.querySelectorAll('.image-slide');
const infos = document.querySelectorAll('.box-slide-content');

//Iteramos para ir agregando la clase que ocultaria los slides
for(let i = 0; i < images.length; i++){
    images[i].classList.add('js-content-hidden');
    infos[i].classList.add('js-content-hidden');
}
//Removemos la clase para ocultar a lo que se va a mostrar en pantalla de primera mano
images[0].classList.remove('js-content-hidden');
infos[0].classList.remove('js-content-hidden');

function changeImage(){
    t = 0;
    for(let i = 0; i < images.length; i++){
        images[i].classList.add('js-content-hidden');
        infos[i].classList.add('js-content-hidden');
    }
    t++;
    images[t].classList.remove('js-content-hidden');
    infos[t].classList.remove('js-content-hidden');
    console.log(t);
}
window.setInterval(changeImage, 3000);
