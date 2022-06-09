let array = ['🍔','🌯','🍣','🍕','🍜','🍱','🍙','🍘','�'];
console.log(array.fill('🍺'));

array = ['🍕','🍕','🍍','🍕','🍕'];
array.find(el => el === '🍍')? console.log('🍍 encontrada') : console.log('No hay 🍍');

console.log(array.filter(el => el !== '🍍'));

array = ['🍓','🍋','🍓','🍋','🍓'];
console.log(array.map(el => el === '🍓'? '🍄' : el));

array = ['🌶️','🥛','🌶️','🥛','🌶️','🥛'];
for (let i = 1; i < array.length; i+=3) {
    array.splice(i,0,'🥵')
}
console.log(array)

array = ['🎴','🎴','🎴','🃏','🎴','🎴','🎴']
for (let i = 1; i < array.length; i++) {
    if (array.at(i) === '🎴' && array.at(i-1) === '🎴') {
        array.splice(i,0,'🃏')
    }
}
console.log(array)