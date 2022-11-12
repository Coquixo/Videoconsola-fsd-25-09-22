const boton = document.getElementById("HomeButtonIn");
const video = document.getElementById('youtube');


const turnOn_Off = () => {
    let on_off = false;

    boton.addEventListener('click', () => {

        if (!on_off) {

            video.classList.add('youtube');
            video.src += '?autoplay=1';

        }

        if (on_off) {

            video.classList.remove('youtube');            
            video.src += '?autplay=!1'

        }
        on_off = !on_off;
    })
}

turnOn_Off();