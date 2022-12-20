while (true) {
    let n = Math.floor(Math.random() * 1000);
    console.log(`Загаданное число - ${n}`);
    
    const numberFromUser = +prompt('Угадайте число от 0 до 999(для выхода введите - (-1)):');
    console.log(`Вы ввели: ${numberFromUser}`);

    if (isNaN(numberFromUser)) {
        alert('Вы ввели не число!');
    } else if (numberFromUser === -1) {
        break
    } else if (numberFromUser > 1000 || numberFromUser < -2) {
        alert('Вы вышли за допустимый диапазон!');
    } else if (numberFromUser > n) {
        alert('Меньше!');
    } else if (numberFromUser < n) {
        alert('Больше!');
    } else if (numberFromUser === n) {
        alert('Вы угадали!!!!!!!!!!!!!!!');
    } 
     
} 


