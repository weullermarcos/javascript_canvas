
let currentColor = 'black';

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e){

    let color = e.target.getAttribute('data-color');
    // console.log('cor clicada: ', color);
    currentColor = color; //atribui a cor selecionada

    //removendo ativo da cor anterior
    document.querySelector('.color.active').classList.remove('active');

    //adicionando ativo a nova cor selecionada
    e.target.classList.add('active');



}