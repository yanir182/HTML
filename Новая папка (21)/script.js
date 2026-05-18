let a = prompt("Сколько тебе лет?");
a = Number(a);
if (a >= 0 && a <= 12) {
    alert("Ты ребенок");
} else if (a >= 13 && a <= 17) {
    alert("Ты подросток");
} else if (a >= 18 && a <= 60) {
    alert("Ты взрослый");
} else if (a >= 61) {
    alert("Ты пенсионер");
} else {
    alert("Что-то не так с возрастом");
}
//==========================
let b = prompt("Напиши трехзначное число");
if (b.length == 3 && !isNaN(b)) {
    let c = b[0];
    let d = b[1];
    let e = b[2];
    if (c == d || c == e || d == e) {
        alert("Да, есть одинаковые цифры");
    } else {
        alert("Нет, все цифры разные");
    }
} else {
    alert("Нужно именно трехзначное число");
}
//==========================
let f = prompt("Какой год проверим?");
f = Number(f);
if (f % 400 == 0) {
    alert("Это високосный год");
} else if (f % 4 == 0 && f % 100 != 0) {
    alert("Это високосный год");
} else {
    alert("Это не високосный год");
}
//==========================
let g = prompt("Введи пятизначное число");
if (g.length == 5 && !isNaN(g)) {
    if (g[0] == g[4] && g[1] == g[3]) {
        alert("Ура! Это палиндром");
    } else {
        alert("Это не палиндром");
    }
} else {
    alert("Нужно пять цифр");
}
//==========================
let h = prompt("Сколько долларов у тебя есть?");
h = Number(h);
let i = prompt("Куда переводим? Напиши EUR, UAH или AZN");
if (i == "EUR") {
    alert("Получится " + h * 1.5 + " евро");
} else if (i == "UAH") {
    alert("Получится " + h * 2 + " гривен");
} else if (i == "AZN") {
    alert("Получится " + h * 2.5 + " манатов");
} else {
    alert("Я не знаю такую валюту");
}
//==========================
let j = prompt("Сколько денег потратил?");
j = Number(j);
if (j >= 200 && j <= 300) {
    let k = j - (j * 3 / 100);
    alert("Скидка 3%. Платить: " + k);
} else if (j >= 301 && j <= 500) {
    let k = j - (j * 5 / 100);
    alert("Скидка 5%. Платить: " + k);
} else if (j >= 501) {
    let k = j - (j * 7 / 100);
    alert("Скидка 7%. Платить: " + k);
} else {
    alert("Скидки нет. Платить: " + j);
}
//==========================
let l = 0;
let m = prompt("Вопрос 1: Столица Франции? (Париж/Лондон/Берлин)");
if (m == "Париж") {
    l = l + 2;
} else {
    l = l + 1;
}
let n = prompt("Вопрос 2: Сколько будет 2 + 2 * 2? (6/8/4)");
if (n == "6") {
    l = l + 2;
} else {
    l = l + 1;
}
let o = prompt("Вопрос 3: Кто говорит 'му-у'? (Корова/Лошадь/Свинья)");
if (o == "Корова") {
    l = l + 2;
} else {
    l = l + 1;
}
console.log("Ты набрал " + l + " баллов");
//==========================
let p = prompt("Сколько часов? (0-23)");
let q = prompt("Сколько минут? (0-59)");
let r = prompt("Сколько секунд? (0-59)");
p = Number(p);
q = Number(q);
r = Number(r);
if (p >= 0 && p <= 23) {
    if (q >= 0 && q <= 59) {
        if (r >= 0 && r <= 59) {
            console.log("Время правильное");
        } else {
            console.log("Секунды неправильные");
        }
    } else {
        console.log("Минуты неправильные");
    }
} else {
    console.log("Часы неправильные");
}
//==========================
let s = prompt("Напиши X");
let t = prompt("Напиши Y");
s = Number(s);
t = Number(t);
if (s > 0 && t > 0) {
    alert("Первая четверть");
} else if (s < 0 && t > 0) {
    alert("Вторая четверть");
} else if (s < 0 && t < 0) {
    alert("Третья четверть");
} else if (s > 0 && t < 0) {
    alert("Четвертая четверть");
} else if (s == 0 && t != 0) {
    alert("Точка на оси Y");
} else if (s != 0 && t == 0) {
    alert("Точка на оси X");
} else {
    alert("Точка в самом центре");
}
//==========================
let u = prompt("Напиши номер месяца от 1 до 12");
u = Number(u);
if (u == 1) {
    alert("Январь");
} else if (u == 2) {
    alert("Февраль");
} else if (u == 3) {
    alert("Март");
} else if (u == 4) {
    alert("Апрель");
} else if (u == 5) {
    alert("Май");
} else if (u == 6) {
    alert("Июнь");
} else if (u == 7) {
    alert("Июль");
} else if (u == 8) {
    alert("Август");
} else if (u == 9) {
    alert("Сентябрь");
} else if (u == 10) {
    alert("Октябрь");
} else if (u == 11) {
    alert("Ноябрь");
} else if (u == 12) {
    alert("Декабрь");
} else {
    alert("Такого месяца нет");
}
//==========================
let v = prompt("Первое число");
let w = prompt("Второе число");
let x = prompt("Что делаем? + - * /");
v = Number(v);
w = Number(w);
if (x == "+") {
    alert(v + w);
} else if (x == "-") {
    alert(v - w);
} else if (x == "*") {
    alert(v * w);
} else if (x == "/") {
    if (w == 0) {
        alert("На ноль делить нельзя!");
    } else {
        alert(v / w);
    }
} else {
    alert("Я не знаю такой знак");
}