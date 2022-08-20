var inputValue = document.querySelector(".ask");
var shadow = document.querySelector('.shadow');

var father = document.querySelector('.centerGlass');
var type = document.createElement('h2');



function makeQuestion() {
    
    var numAl = Math.floor(Math.random() * 7);
    var answer = takeAnswer(numAl);

    shakeBall();
    showAnswer(answer)
}

function takeAnswer(num) {

    switch (num) {
        case 0:
            return ('Melhor não contar agora')
            break;

        case 1:
            return ('Não conte com isso...');
            break;

        case 2:
            return ('Talvez seja possivel.');
            break;

        case 3:
            return ('Não!')
            break;

        case 4:
            return ('Com certeza!')
            break;

        case 5:
            return ('Pergunte novamente depois')
            break;

        case 6:
            return ('Não posso prever isso.')
            break;

        default:
            return ('Algo deu errado')
    }

}

function showAnswer(ans) {

    // Cria o elemento e junta com  a reposta !
    var txt = document.createTextNode(ans);

    if (type.lastChild == null) {
        
        type.appendChild(txt);
        // Add a resposta ao centro da bola
        father.appendChild(type);
    } else {
        // retira a previsão anterior
        cleanScreen(type,makeQuestion)
    }
    


}

function cleanScreen(par, callback) {

    par.removeChild(par.lastChild);
    callback();

}

function shakeBall() {

    var ball = document.querySelector('.ball');
    ball.classList.add('move');


    setTimeout(returnBall, 750);
}

function returnBall() {
    var ball = document.querySelector('.ball');
    ball.classList.remove('move');
}
