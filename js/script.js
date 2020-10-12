
//Guardamos las imagenes y su información en constantes, tambien agregamos una constate para manejar los dot
const images = document.querySelectorAll('.image-slide');
const infos = document.querySelectorAll('.box-slide-content');
const dots = document.querySelectorAll('.dot');
let position = 0;

//Iteramos para ir agregando la clase que ocultaria los slides
for (let i = 0; i < images.length; i++) {
    images[i].classList.add('js-content-hidden');
    infos[i].classList.add('js-content-hidden');  
}

//Removemos la clase para ocultar a lo que se va a mostrar en pantalla de primera mano
images[0].classList.remove('js-content-hidden');
infos[0].classList.remove('js-content-hidden');

// con document llamamos los arrow que contienen la imagen de derecha e izquierda, la intención de hacerlo 
// asi es poder identificar cuando ocurre el evento de clic y aplicar la función que itera con el index 
document.getElementById('arrow2').addEventListener('click', function (event) {
    changeImage2(true);
});
document.getElementById('arrow1').addEventListener('click', function (event) {
    changeImage2(false);
});

// la función changeImageByDot permite que los dots se salten el index y se activen de acuedo a cual se le da click, tambien oculta al que se activa cuando se da click, esta función esta activa directamente en el index.
function changeImageByDot(index, obj) {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
    }
    obj.classList.add('dot-active');
    changeImage2(null, index);
}

// La función chaImage2 activa los botones de siguiente, lo que hace exactamente esta función es utilizar el index de las imagenes para saber cual es la imagen que sigue ya sea para la izquiersa o para la derecha, usa la misma logina que la función del slide

function changeImage2(right, index = null) {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('js-content-hidden');
        infos[i].classList.add('js-content-hidden'); 
        dots[i].classList.remove('dot-active');
    }
    if (index) {
        position = index;
    } else {
        if (right) {
            if (position < 2) {
                position++;  
            } else {
                position = 0;
            }
        } else {
            if (position == 0) {
                position = 2;
            } else {
                position--;
            }
        }
    }
    images[position].classList.remove('js-content-hidden');
    infos[position].classList.remove('js-content-hidden');
    dots[position].classList.add('dot-active');
}

function changeImage() {

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('js-content-hidden');
        infos[i].classList.add('js-content-hidden'); 
        dots[i].classList.remove('dot-active');
    }
    if (position < 2) {
        position++;
    } else {
        position = 0;
    }
    images[position].classList.remove('js-content-hidden');
    infos[position].classList.remove('js-content-hidden');
    dots[position].classList.add('dot-active');
}

window.setInterval(changeImage, 5000);