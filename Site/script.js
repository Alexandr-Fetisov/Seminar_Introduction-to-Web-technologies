<script language = "JavaScript"></script>
// задача 1
alert("Привет мир");

//задача 2
alert( `результат: ${158+2}`); // результат: 160

//задача 3
let name = "Александр"; 
alert( `Привет, ${name}!`); // вариант 1 // Привет, Александр
alert( 'Привет, '+name); // вариант 2 // Привет, Александр

// задача 4
let test = prompt("Как Вас зовут?", "Имя");
alert( 'Привет, '+test );

// задача 5
let userName = prompt("Как Вас зовут?", "Имя");
    function showMessage() {
        let message = 'Привет, ' + userName;
        alert(message)
    }
    showMessage(); // Привет, Александр

// задача 6
if (confirm("Вы уверены?")) {
    alert("Мы рады, что Вы уверены!");
} else {
    alert("Жаль, что Вы не уверены...");

}

// задача 7 перепишите код, используя конструкцию switch-case,
// запрашивая возраст пользователя через диалоговое окно
// let age = prompt('Сколько Вам лет?');
// if (age == 18) {
//     alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//     alert('Вам надо учить уроки');
// } else if (age == 30) {
//     alert('Ложитесь спать, завтра на работу');
// } else {
//     alert('Мы не знаем что Вам делать');
// }
// конструкция switch-case
let age = prompt('Сколько Вам лет?');

switch (age) {
    case '18':
        alert('Вы совершеннолетний, все можно!');
        break;
    case '10':
        alert('Вам надо учить уроки');
        break;
    case '30':
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем что Вам делать');
        break;
}

// 8 ДЗ Создать страницу, которая спрашивает
// имя у пользователя и выводит его с помощью функции.

let Name = prompt('Как вас зовут?');
function showName() {
let message = 'Привет, ' + Name;
alert(message);
}
showName()




