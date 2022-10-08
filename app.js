const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    /*hem gosterme hem gizleme işlemi için 'toggle' etiketi kullanılır. */
    search.classList.toggle('active')
    input.focus();



})