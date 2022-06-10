# Ejercicios

- [Ejercicio 15](#ejercicio-15)

- [Ejercicio 16](#ejercicio-16)

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

