let user_wins = 0;
let computer_wims = 0;
const max_wins = 3;
let log = document.getElementById('texto')

// Main gameplay func
function main(input) {
    let computer = Math.round(Math.random()*2)
    log.innerHTML += '🃏 player1: ' + convert_to_emoji(input) + '<br>';
    log.innerHTML += '🃏 computer: ' + convert_to_emoji(computer) + '<br>';

    if (input === 0) {
        if (computer === 2){
            user_wins++;
            user_wins_func();
        } else if (computer === 1){
            computer_wims++;
            comp_wins();
        } else {
            tie()
        }
    } else if (input === 1) {
        if (computer === 0){
            user_wins++;
            user_wins_func();
        } else if (computer === 2){
            computer_wims++;
            comp_wins();
        } else {
            tie()
        }
    } else if (input === 2) {
        if (computer ===1){
            user_wins++;
            user_wins_func();
        } else if (computer === 0){
            computer_wims++;
            comp_wins();
        } else {
            tie()
        }
    } 
    check_end();
}

// Aux funcs
function comp_wins(){
    log.innerHTML += 'Gana computadora <br>' + '<br>';
    log.innerHTML += 'Jugador [' + user_wins + '] - [' + computer_wims + '] Maquinita <br>' + '<br>';
}

function user_wins_func(){
    log.innerHTML += 'Gana PC <br>' + '<br>';
    log.innerHTML += 'Jugador [' + user_wins + '] - [' + computer_wims + '] Maquinita <br>' + '<br>';
}

function tie() {
    log.innerHTML += 'NO GANA NADIE  <br>' + '<br>';
    log.innerHTML += 'Jugador [' + user_wins + '] - [' + computer_wims + '] Maquinita <br>' + '<br>';
}

function check_end(){
    if (user_wins === max_wins || computer_wims === max_wins) {
        log.innerHTML += 'Final del juego enhorabuena al campeón' + '<br>';
        $('button').hide();
        if (user_wins === max_wins){
            log.innerHTML += 'El campeón eres tú, siéntete orgulloso/a' + '<br>';
        } else{
            log.innerHTML += 'Humillado por un computador, comienza la revolución' + '<br>';
        }
    }
}

function convert_to_emoji(input){
    let emoji = '⚫';
    if (input === 1) {
        emoji = '📰';
    } else if (input === 2){
        emoji = '✂️';
    }
    return emoji;
}

// Button callback definition
$('#piedra').mouseup(function () { 
    main(0);
});

$('#papel').mouseup(function () { 
    main(1);
});

$('#tijeras').mouseup(function () { 
    main(2);
});
