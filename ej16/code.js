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

let nada = "💳  👻"