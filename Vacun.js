const acordeon = document.getElementsByClassName('indiction_item');

for (i=0; i<acordeon.length; i++) {
    acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa');
    });
};