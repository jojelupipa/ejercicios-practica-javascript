
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
