// Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

/*
function Purchase(nameOfPurchase, quantity, isBought) {
    this.nameOfPurchase = nameOfPurchase;
    this.quantity = quantity;
    this.isBought = isBought;
}

const purchase1 = new Purchase("Bread", 2, true);
const purchase2 = new Purchase("Sweets", 10, false);
const purchase3 = new Purchase("Milk", 1, true);
const purchase4 = new Purchase("Butter", 2, false);

var ListOfPurchase = [purchase1, purchase2, purchase3, purchase4];

ShowArray = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].isBought === false)
            console.log(`You haven't bought ${array[i].nameOfPurchase} in quantity of ${array[i].quantity}`);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].isBought === true)
            console.log(`You've bought ${array[i].nameOfPurchase} in quantity of ${array[i].quantity}`);
    }
}

AddPurchase = function (array, myPurchase) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].nameOfPurchase === myPurchase.nameOfPurchase) {
            array[i].quantity += myPurchase.quantity;
        }
        else {
            count++;
        }
    }
    if (count === array.length) {
        array.push(myPurchase);
    }
}

BuyOfPurchase = function(array, editIsBoughtByNameOfPurchase) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nameOfPurchase === editIsBoughtByNameOfPurchase) {
            array[i].isBought = true;
        }
    }
}

const myPurchase1 = new Purchase("Sugar", 1, true);

AddPurchase(ListOfPurchase, myPurchase1);

BuyOfPurchase(ListOfPurchase, "Butter");

ShowArray(ListOfPurchase);
*/

// Задание 2
// Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

/*
function Product(nameOfProduct, quantity, priceForOnePiece) {
    this.nameOfProduct = nameOfProduct;
    this.quantity = quantity;
    this.priceForOnePiece = priceForOnePiece;
}

const product1 = new Product("Microwave", 2, 12000);
const product2 = new Product("TV", 1, 60000);
const product3 = new Product("Gamepad", 4, 9000);
const product4 = new Product("Plate", 1, 25000);

var Check = [product1, product2, product3, product4];

ShowCheck = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

SumOfCheck = function (array) {
    let sum = 0;
    let tempSum = 0;
    for (let i = 0; i < array.length; i++) {
        tempSum = array[i].quantity * array[i].priceForOnePiece;
        sum += tempSum;
    }
    console.log(sum);
}

TheGreatestPurchase = function (array) {
    var max = 0;
    for (let i = 0; i < array.length; i++) {
        max = array[0].quantity * array[0].priceForOnePiece;
    }
    for (let i = 0; i < array.length; i++) {
        if ((array[i].quantity * array[i].priceForOnePiece) > max) {
            max = array[i];
        }
    }
    console.log(max);
}

// Эту задачу я не понял до конца,
// Решил сложить сумму покупок
// И поделить на общее количество товаров
AveragePrice = function (array) {
    let sum = 0;
    let tempSum = 0;
    for (let i = 0; i < array.length; i++) {
        tempSum = array[i].quantity * array[i].priceForOnePiece;
        sum += tempSum;
    }
    let sumQuan = 0;
    for (let i = 0; i < array.length; i++) {
        sumQuan += array[i].quantity;
    }
    let result = sum / sumQuan;
    console.log(result);
}

ShowCheck(Check);
SumOfCheck(Check);
TheGreatestPurchase(Check);
AveragePrice(Check);
*/

// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнива-
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

/*
function Style (nameOfStyle, valueOfStyle) {
    this.nameOfStyle = nameOfStyle;
    this.valueOfStyle = valueOfStyle;
}

const style1 = new Style("font-size", "26px");
const style2 = new Style("color", "red");
const style3 = new Style("font-weight", "bold");
const style4 = new Style("font-style", "italic");

var ListOfStyles = [style1, style2, style3, style4];

ShowStyle = function (array, text) {
    var temp = "";
    for (let i = 0; i < array.length; i++) {
        temp += `${array[i].nameOfStyle}: ${array[i].valueOfStyle};`;
        //console.log(temp);        
    }
    document.write(`<p style="${temp}">${text}</p>`);
}

ShowStyle(ListOfStyles, "The Sun is shining!");
*/

// Задание 4
// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфа-
// виту).

/*
function Audience(nameOfAudience, capacity, nameOfFaculty) {
    this.nameOfAudience = nameOfAudience;
    this.capacity = capacity;
    this.nameOfFaculty = nameOfFaculty;
}

function Group(nameOfGroup, quantityOfStudents, nameOfFaculty) {
    this.nameOfGroup = nameOfGroup;
    this.quantityOfStudents = quantityOfStudents;
    this.nameOfFaculty = nameOfFaculty;
}

const group1 = new Group("PV121", 15, "Math");

const audience1 = new Audience(301, 12, "Math");
const audience8 = new Audience(302, 15, "Math");
const audience6 = new Audience(303, 10, "Math");
const audience4 = new Audience(401, 11, "Physics");
const audience5 = new Audience(402, 17, "Physics");
const audience3 = new Audience(403, 10, "Physics");
const audience7 = new Audience(501, 13, "Biology");
const audience2 = new Audience(502, 19, "Biology");
const audience9 = new Audience(503, 16, "Biology");

var ListOfAudience = [audience1, audience2, audience3,
    audience4, audience5, audience6, audience7, audience8,
    audience9];

ShowAudiences = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

ShowAudiencesByFaculty = function (array, nameOfFaculty) {
    for (let i = 0; i < array.length; i++) {
        if (nameOfFaculty === array[i].nameOfFaculty)
            console.log(array[i].nameOfAudience);
    }
}

ShowAudiencesForGroup = function (array, group) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nameOfFaculty === group.nameOfFaculty
            && array[i].capacity >= group.quantityOfStudents)
            console.log(array[i].nameOfAudience);
    }
}

SortAudiencesByCapacity = function (array) {
    array.sort(function (a, b) {
        return a.capacity - b.capacity;
    });
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

SortAudiencesByName = function (array) {
    array.sort(function(a,b) {
        return a.nameOfAudience - b.nameOfAudience;
    });
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

ShowAudiences(ListOfAudience);
ShowAudiencesByFaculty(ListOfAudience, "Math");
ShowAudiencesForGroup(ListOfAudience, group1);
SortAudiencesByCapacity(ListOfAudience);
SortAudiencesByName(ListOfAudience);
*/