
//Dados iniciais:
let currentColor = 'black';
let canDraw = false;
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

let mouseX = 0;
let mouseY =0;

//Eventos:
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup'  , mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);

//Funções:

function mouseDownEvent(e){
    canDraw = true;

    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){

    if(canDraw){

        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent(){
    canDraw = false;
}

function colorClickEvent(e){

    let color = e.target.getAttribute('data-color');
    // console.log('cor clicada: ', color);
    currentColor = color; //atribui a cor selecionada

    //removendo ativo da cor anterior
    document.querySelector('.color.active').classList.remove('active');

    //adicionando ativo a nova cor selecionada
    e.target.classList.add('active');
}

function draw(x, y){

    let pointX = x - screen.offsetLeft;
    let poinY  = y - screen.offsetTop;

    ctx.beginPath(); //inicia o processo de desenho
    ctx.lineWidth = 5; //5px de largura para a linha
    ctx.lineJoin = "round"; //linha com bordas arredondadas
    ctx.moveTo(mouseX, mouseY); //começa a desenhar
    ctx.lineTo(pointX,poinY); //define até onde a linha vai
    ctx.closePath();
    ctx.strokeStyle = currentColor; //define a cor da linha
    ctx.stroke(); //finaliza o desenho

    mouseX = pointX;
    mouseY = poinY;
}

//limpa a tela
function clearScreen(){

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
