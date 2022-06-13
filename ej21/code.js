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