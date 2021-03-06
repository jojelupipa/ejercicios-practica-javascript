# Ejercicios

- [Ejercicio 15](#ejercicio-15)

- [Ejercicio 16](#ejercicio-16)

- [Ejercicio 17](#ejercicio-17)

- [Ejercicio 18](#ejercicio-18)

- [Ejercicio 19](#ejercicio-19)

- [Ejercicio 20](#ejercicio-20)

- [Ejercicio 21](#ejercicio-21)

## Ejercicio 15

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/172881733-cc869ee9-6e99-480b-9304-92eb3503dbb3.png)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="quiz_area">
        <h1>Quiz</h1>
        <p id="pregunta">
            Pregunta
        </p>
        <div class="preguntas">
            <button id="option-1" class="option">option 1</button>
            <button id="option-2" class="option">option 2</button>
            <button id="option-3" class="option">option 3</button>
            <button id="option-4" class="option">option 4</button>
        </div>
    </div>
    
    <div id="final_screen">
        <h1 id="final_score_title">Puntuación:</h1>
        <p id="final_score">0</p>
    </div>
    
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### CSS

```css
h1{
    text-align: center; 
    text-decoration: underline; 
    text-underline-offset: 10px;
}

#final_screen{
    text-align: center;
}

#pregunta{
    text-align: center;
}

.preguntas{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.option{
    margin: 1vh;
    background-color: cornflowerblue;
    color: white;
    border-radius: 5px;
    border: 2px solid black;
    padding-left: 5vh;
    padding-right: 5vh;
}
```

### JS

```js

let score = 0;
let current_stage = 0;
let next_stage = 1;
soluciones = ["emacs", "B", "Azul", "Pato"]
pregunta_opciones = [
    ["¿Cuál de estos es un editor de texto?", "emacs","exange","electron","ectoplasma"],
    ["¿Cuál es tu color favorito", "Azul", "Blanco", "Cian", "Dorado"],
    ["Pregunta de control, marca: B", "A", "B", "C", "D"],
    ["¿Qué animal es mejor", "Jabalí", "Cerdo", "Pato", "Macaco"],
]
function checkeador(texto) {
    if (soluciones.includes(texto)){
        score +=100;
    }
    console.log(score);
    $("#final_score").text(score);
    current_stage++;
    if (next_stage <= pregunta_opciones.length) {
        actualizador(pregunta_opciones[current_stage])
    } else {
        $("#quiz_area").hide();
        $("#final_score_title").text("Puntuación final:");
    }   
}

$('button').mouseup(function () { 
    console.log($(this).text())
    checkeador($(this).text())
});

function actualizador(element) {
        $(document).ready(function() {
            $('#pregunta').text(element[0]);
            $('#option-1').text(element[1]);
            $('#option-2').text(element[2]);
            $('#option-3').text(element[3]);
            $('#option-4').text(element[4]);

            next_stage++;
    });
}

actualizador(pregunta_opciones[current_stage])
```

### Resultado

  ![image](https://user-images.githubusercontent.com/14235896/172882257-556e7904-96a2-4a9c-8a02-89f9b78fee44.png)
  ![image](https://user-images.githubusercontent.com/14235896/172882321-62cd0e37-5146-47db-9901-418963589b6f.png)
  ![image](https://user-images.githubusercontent.com/14235896/172882395-ed5b850a-d080-435a-b2dd-7b8b89cb884b.png)

## Ejercicio 16

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/173010931-598773ea-d935-4675-8914-2079ebc276e1.png)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="square">
        <label for="text">Caracter a insertar:</label>
        <input id="emoji_input" type="text">
        <button id="push">Push</button>
        <button id="unshift">Unshift</button>
        <button id="insert_at">Insert at</button>
        <input type="number" id="insert_value" value="0" min="0">
    </div>
    <div class="square">
        <button id="pop">Pop</button>
        <button id="shift">Shift</button>
        <button id="remove_at">Remove at</button>
        <input type="number" id="remove_at_value" value="0" min="0">
    </div>
    <div>
        <p>
            Array resultante:
        </p>
        <p id="array">[ ]</p>
    </div>
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### CSS

```css
.square{
    width: fit-content;
    padding: 10px;
    margin: 10px;
    outline: black solid 1px;
}

#emoji_input{
    width: 30px;
}
```

### JS

```js
// Global var definition
let array = [];
// Button callback definition
$('#push').mouseup(function () { 
    array.push($("#emoji_input").val());
    update_array()
});

$('#unshift').mouseup(function () { 
    array.unshift($("#emoji_input").val());
    update_array()
});

$('#insert_at').mouseup(function () { 
    array.splice(
        $("#insert_value").val(),
        0,
        $("#emoji_input").val()
        );
    update_array()
});

$('#pop').mouseup(function () { 
    array.pop();
    update_array()
});

$('#shift').mouseup(function () { 
    array.shift();
    update_array()
});

$('#remove_at').mouseup(function () { 
    array.splice(
        $("#remove_at_value").val(),
        1
        );
    update_array()
});

// Other functions
function update_array(){
    $("#array").text("[" + array + "]");
    console.log(array)
}
```

### Resultados

![image](https://user-images.githubusercontent.com/14235896/173011242-c47e3dfc-2244-4fee-9f98-f0b3bb48bcc5.png)
![image](https://user-images.githubusercontent.com/14235896/173011359-93ea3efc-e9fc-4977-907d-aab2ecf57fd1.png)
![image](https://user-images.githubusercontent.com/14235896/173011424-6ed7bfdb-229b-42d2-8303-57c8eb6fa87e.png)


## Ejercicio 17

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/173013099-7d9870bd-7906-4b39-bba2-82886c08e372.png)


### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p id="texto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, maiores. Sunt, dicta natus! Perspiciatis eveniet voluptas consectetur, voluptatum odio asperiores quas non facere animi illum dolor dolore quia autem eos.
        Voluptates velit fugiat, quas quam alias consequuntur inventore voluptatem facere sapiente eligendi nihil minus sunt quasi deserunt ipsum, esse veritatis expedita eaque fugit repellendus accusamus dolorem. Sapiente esse assumenda aperiam.
        Delectus libero obcaecati aperiam eum eos quos numquam similique laboriosam voluptatem iste repellat, nisi tempora nulla dolorem assumenda aut illum molestiae consequuntur deserunt nobis veniam natus minus suscipit. Vitae, atque.
    </p>
    <button id="azul">Azulificador</button>
    <button id="rojo">Rojificador</button>
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### JS

```js

// Button callback definition
$('#azul').mouseup(function () { 
    $('#texto').css('color', 'blue');;
});

$('#rojo').mouseup(function () { 
    $('#texto').css('color', 'red');;
});
```

### Resultado

![image](https://user-images.githubusercontent.com/14235896/173013409-52815b7e-0f39-4351-8d12-c0ee519d67a5.png)
![image](https://user-images.githubusercontent.com/14235896/173013462-13bb658b-71fa-44c9-b012-7747e33cc583.png)
![image](https://user-images.githubusercontent.com/14235896/173013489-fd0853c7-9282-4a79-a94f-90481e02f4a2.png)

## Ejercicio 18

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/173028275-b246991e-46df-4682-8532-7f74b4ceb0b9.png)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p id="texto">
        Bien seas venido al juego de piedra, papel o tijera. Elije 
        aleatoriamente y procura ganar. <br>
    </p>
    <button id="piedra">Piedra ⚫ </button>
    <button id="papel">Papel 📰</button>
    <button id="tijeras">Tijeras ✂️</button>
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### JS

```js
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
```

### Resultado

![image](https://user-images.githubusercontent.com/14235896/173028893-6d1c30be-0d1d-4e58-b3a4-9b419a04449a.png)
![image](https://user-images.githubusercontent.com/14235896/173029009-05fde3cd-d02c-4d06-b3ed-d4a38c145c65.png)
![image](https://user-images.githubusercontent.com/14235896/173029092-c7cc1677-b647-4a7a-8eae-ef86da69884d.png)

## Ejercicio 19

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/173037721-49c44f57-892e-4f0b-a8a0-15f47b462a61.png)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20carta/card-back.png?raw=true" alt="">
    <img src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20carta/card-back.png?raw=true" alt="">
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### JS

```js

$('img').mouseenter(function () { 
    $(this).attr('src', 'https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20carta/card-front.png?raw=true');
});
$('img').mouseleave(function () { 
    $(this).attr('src', 'https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20carta/card-back.png?raw=true');
});
```

### Resultado

![image](https://user-images.githubusercontent.com/14235896/173038044-b4fe34b1-c72b-499e-ba6f-96e9955e5e4b.png)
![image](https://user-images.githubusercontent.com/14235896/173038071-2c289567-ab55-4317-9611-db0bfd0c1c6d.png)
![image](https://user-images.githubusercontent.com/14235896/173038110-99b1a935-1c83-4df9-b721-e766b0bcad29.png)

## Ejercicio 20

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/173041884-a3f7ca05-d29d-4729-b40c-aba3bfb67806.png)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img id="button" src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/boff.jpg?raw=true" alt="">
    <img id="bulb" src="https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/off.jpg?raw=true" alt="">
    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### CSS

```css
body{
    display: flex;
    flex-direction: column;
}
img{
    width: 20vh;
}
```

### JS

```js
let bulb_status = 'off'

$('#button').mousedown(function () { 
    if (bulb_status === 'off') {
        $(this).attr('src', 'https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/bon.jpg?raw=true');
        $('#bulb').attr('src', 'https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/on.jpg?raw=true');
        bulb_status= 'on'
    } else {
        $(this).attr('src', 'https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/boff.jpg?raw=true');
        $('#bulb').attr('src', 'https://github.com/DavidBernalGonzalez/EjerciciosJQuery/blob/main/Ejercicio%20bombilla/off.jpg?raw=true');
        bulb_status= 'off'
    }
    
});

```

### Resultado

![image](https://user-images.githubusercontent.com/14235896/173042167-aff99a9c-aaf4-45eb-9187-1c1bb12b994f.png)
![image](https://user-images.githubusercontent.com/14235896/173042223-651c3553-a82e-4ea9-81ab-6c800716b0a4.png)


## Ejercicio 21

### Enunciado

![image](https://user-images.githubusercontent.com/14235896/173361815-4786893d-7a0f-4a44-b232-133fcb74ff96.png)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="background_grid">
        <div class="div1">
            <div class="category_ui">
                <div class="actions">
                    <button class="food_button">🍦</button>
                    <button class="food_button">🥕</button>
                    <button class="food_button">🍖</button>
                </div>
                <div class="health_container">
                    <div id="food_health" class="current_health"></div>
                </div>
                <p><span id="food_points">0</span>% full</p>
                <p>EAT</p>
            </div>
        </div>
        <div class="div2">
            <div class="category_ui">
                <div class="actions">
                    <button class="play_button">🎮</button>
                    <button class="play_button">🏉</button>
                    <button class="play_button">♟️</button>
                </div>
                <div class="health_container">
                    <div id="play_health" class="current_health"></div>
                </div>
                <p><span id="play_points">0</span>% full</p>
                <p>PLAY</p>
            </div>        </div>
        <div class="div3">
            <div class="category_ui">
                <p>FIGHT</p>

                <div class="actions">
                    <button class="fight_button">✊</button>
                    <button class="fight_button">🏃</button>
                    
                </div>
                <div class="health_container">
                    <div id="fight_health" class="current_health"></div>
                </div>
                <p><span id="fight_points">0</span>% full</p>
            </div>
        </div>
        <div class="div4">
            <p>SLEEP</p>
                <div class="actions">
                    <button class="sleep_button">🛌</button>
                    <button class="sleep_button">🌙</button>
                    
                </div>
                <div class="health_container">
                    <div id="sleep_health" class="current_health"></div>
                </div>
                <p><span id="sleep_points">0</span>% full</p>
            </div>
        </div>
    <div id="pet">
        <p>Perico</p>
        <img src="https://source.unsplash.com/random/150x150?pet" alt="">
        <div class="health_container">
            <div id="pet_health" class="current_health"></div>
        </div>
        <p><span id="health_points">0</span>% full</p>
    </div>
    </div>



    <script src="./jquery-3.6.0.min.js"></script>
    <script src="./code.js"></script>
</body>
</html>
```

### CSS

```css
#background_grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
}

.div1 { 
    grid-area: 1 / 1 / 2 / 2; 
    background-color: lightgreen;
    color: darkgreen;
}

.div2 { 
    grid-area: 1 / 2 / 2 / 3; 
    background-color: lemonchiffon;
    color: goldenrod;
    text-align: right;
}
.div3 { 
    grid-area: 2 / 1 / 3 / 2; 
    background-color: lightcoral;
    color: darkred;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.div4 { 
    grid-area: 2 / 2 / 3 / 3; 
    background-color: lightblue;
    color: darkblue;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#pet{
    text-align: center;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.health_container{
    margin: 10px;
    position: relative;
    display: flex;
    align-items: center;
    height: 10px;
    width: 90%;
    background-color: black;
    border-radius: 5px;
}

.current_health{
    margin-left: 1%;
    margin-right: 1%;
    height: 5px;
    background-color: lightgreen;
    border-radius: 5px;
    width: 100%;
}

.category_ui{
    margin: 2%;
}
```

### JS

```js
let categories = ['food', 'play', 'fight', 'sleep'];

function updater(category, points){


    update_bar(bar_name);
}

function update_bar(bar_name){
    //console.log(bar_name + '_points')
    let points = $('#'  + bar_name + '_points').text();
    
    $('#' + bar_name + '_health').css(
        'width',
        points + '%'
    );
    
    let total_hp = 0;
    categories.forEach(el=> {
        total_hp +=  Number($('#'  + el + '_points').text());
    })
    total_hp = total_hp / 4;
    $('#pet_health').css(
        'width',
        total_hp + '%'
    );
    $('#health_points').text(total_hp);
}

categories.forEach(el => {
    update_bar(el);
});

$('.food_button').mouseup(function () { 
    let points = Number($('#food_points').text());
    if (points >= 100) {
        points = 100;
    } else{
        $('#food_points').text(points += 10); 
    }
    update_bar('food');
});

$('.play_button').mouseup(function () { 
    let points = Number($('#play_points').text());
    if (points >= 100) {
        points = 100;
    } else{
        $('#play_points').text(points += 10); 
    }
    update_bar('play');
});

$('.fight_button').mouseup(function () { 
    let points = Number($('#fight_points').text());
    if (points >= 100) {
        points = 100;
    } else{
        $('#fight_points').text(points += 10); 
    }
    update_bar('fight');
});

$('.sleep_button').mouseup(function () { 
    let points = Number($('#sleep_points').text());
    if (points >= 100) {
        points = 100;
    } else{
        $('#sleep_points').text(points += 10); 
    }
    update_bar('sleep');
});
```

### Resultado

![image](https://user-images.githubusercontent.com/14235896/173363117-0e62086d-6229-44c7-b695-138509f3620a.png)

![image](https://user-images.githubusercontent.com/14235896/173363225-cffdd1f4-d037-4ff7-8cde-08c765a973b7.png)
