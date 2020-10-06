//Guardamos las imagenes y su información en constantes
const images = document.querySelectorAll('.image-slide');
const infos = document.querySelectorAll('.box-slide-content');
let position = 0;
//Iteramos para ir agregando la clase que ocultaria los slides
for(let i = 0; i < images.length; i++){
    images[i].classList.add('js-content-hidden');
    infos[i].classList.add('js-content-hidden');
}
//Removemos la clase para ocultar a lo que se va a mostrar en pantalla de primera mano
images[0].classList.remove('js-content-hidden');
infos[0].classList.remove('js-content-hidden');



function changeImage(){
    
    for(let i = 0; i < images.length; i++){
        images[i].classList.add('js-content-hidden');
        infos[i].classList.add('js-content-hidden');
    }
    if (position < 2){
        position++;
    }else{
        position = 0;
    }
    
    images[position].classList.remove('js-content-hidden');
    infos[position].classList.remove('js-content-hidden');
}
window.setInterval(changeImage, 3000);