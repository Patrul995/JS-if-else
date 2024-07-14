///////// Zadanie 1 /////////

// alert
//     (" 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).")

// let age = prompt("Write yor age");

// switch (true) {
//     case age >= 1 && age < 9:
//         alert("Malish");
//         break;
//     case age >= 10 && age < 19:
//         alert("Podrostok");
//         break;
//     case age >= 20 && age < 29:
//         alert("Molodoy celovek");
//         break; 
//     case age >= 30 && age < 39:
//         alert("Vzroslo-molodoy celovek");
//         break;
//     case age >= 40:
//         alert("Viwe 40 let (dalwe ne pisal)");
//         break;
//     default:
//         alert("default");
//         break;
// }



///////// Zadanie 2 /////////

// alert("2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).");

// let num = prompt("write nubmer");

// if (a = 1) {
//     alert("!");
// }
// else if(a = 2) {
//     alert("@");
// }
// else if(a = 3) {
//     alert("#");
// }
// else if(a = 4) {
//     alert("$");
// }
// else if(a = 5) {
//     alert("%");
// }
// else if(a = 6) {
//     alert("^");
// }
// else if(a = 7) {
//     alert("&");
// }
// else if(a = 8) {
//     alert("*");
// }
// else if(a = 9) {
//     alert("(");
// }
// else if(a = 0) {
//     alert(")");
// }
// else {
//     alert("WRONG!");
// }




///////// Zadanie 3 /////////

// alert ("3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.");

// let num = prompt("Write 1st number");

// if (num[0] == num[1] || num[1] == num[2] || num[0] == num[2]) {
//     alert('ЕСТЬ СОВПАДЕНИЕ');
// }
// else {
//     alert('СОВПАДЕНИЙ НЕТУ');
// }




///////// Zadanie 4 /////////

// alert (" 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.");

// let num = prompt('Write year');

// if ((num % 400 == 0 || num % 4 == 0) && (num % 100 != 0) ) {
//     alert ('Год высокосный');
// }
// else {
//     alert ('Год невысокосный');
// }




///////// Zadanie 5 /////////

// alert ('5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.')

// let num = prompt('Write number');

// if (num[0] == num[4] && num[1] == num[3] ) {
//     alert("Число полиндром");
// }
// else {
//     alert("Число неполиндром");
// }





///////// Zadanie 6 /////////

// alert (" 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, " 
// + "UAN или AZN, и получает в ответ соответствующую сумму.")

// let num1 = prompt ('USD');
// let num2 = prompt ('EUR, UAN or AZN');

// if (num2 == 'EUR' ) {
//     alert (num1 * 0.92);
// }
// else if (num2 == 'UAN' ) {
//     alert (num1 * 7.25);
// }
// else if (num2 == 'AZN' ) {
//     alert (num1 * 1.7);
// }
// else {
//     alert ('WRONG!');
// }




///////// Zadanie 7 /////////

// alert(' 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.')

// let num = prompt('Write number');

// if (num >= 200 && num < 300) {
//     alert(num - (num * 0.03));
// }
// else if (num >= 300 && num < 500) {
//     alert(num - (num * 0.05));
// }
// else if (num >= 500) {
//     alert(num - (num * 0.07));
// }
// else {
//     alert("Wrong!");
// }




///////// Zadanie 8 /////////

// alert ('8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат');

// let num1 = prompt ('Длина окружности');
// let num2 = prompt ('Периметр квадрата');
// let circleDiametr = num1 / 3.14;
// let square = num2 / 4;

// if (circleDiametr <= square ) {
//  alert('Помещается');
// }
// else {
//     alert('Не помещается');
// }




///////// Zadanie 9 /////////

///////// Variant 1 /////////

// alert('9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 ' +
// 'балла. После вопросов выведите пользователю количество ' +
// 'набранных баллов.');

// let question1 = alert('Какого цвета елка?');
// let answer1 = prompt('Зеленая, Красная, Желтая');
// let question2 = alert('Какого цвета небо?');
// let answer2 = prompt('Синее, Красное, Безцветное');
// let question3 = alert('Сколько будет 2+2?');
// let answer3 = prompt('4, 6, 8');

// if (answer1 == 'Зеленая'){
//     answer1 = 2
// }
// else {
//     answer1 = 0
// }

// if (answer2 == 'Синее'){
//     answer2 = 2
// }
// else {
//     answer2 = 0
// }

// if (answer3 == 4){
//     answer3 = 2
// }
// else {
//     answer3 = 0
// }

// alert (answer1 + answer2 + answer3)


///////// Variant 2 /////////

// let num1 = prompt('Какого цвета елка?   Зеленая, Красная, Желтая ' )
// let num2 = prompt('Какого цвета небо?   Синее, Красное, Безцветное')
// let num3 = prompt('Сколько будет 2+2?      4, 6, 8 ')

// if(num1 == 'Зеленая'){
//     num1 = 2
// }
// else {
//     num1 = 0
// }

// if (num2 == 'Синее')
//     num2 = 2
// else {
//     num2 = 0
// }

// if (num3 == '4')
//     num3 = 2
// else {
//     num3 = 0
// }

// alert(num1 + num2 + num3);





///////// Zadanie 10 /////////

// alert = (" 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.");

// let day = prompt ('Введите дату');
// let month = prompt ('Введите дату');
// let year = prompt ('Введите дату');
// let lastDayOfJan = 31;
// // let feb = 28;
// let lastDayOfMar = 31;
// let lastDayOfApr = 30;
// let lastDayOfMay = 31;
// let lastDayOfJun = 30;
// let lastDayOfJul = 31;
// let lastDayOfAug = 31;
// let lastDayOfSep = 30;
// let lastDayOfOct = 31;
// let lastDayOfNov = 30;
// let lastDayOfDec = 31;
// let nextDay;
// let nextMonth = month;
// let nextYear = year;


// if (month == "May" ) {
//     if (day == lastDayOfMay){
//         nextDay = 1;
//     }
//     else {
//         nextDay = day + 1;
//     }
// }
// if (month == 12) {

// }

// alert(day + month  + year );