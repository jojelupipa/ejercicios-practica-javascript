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
