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
    for (let i = 0; i < array.length; i++) {
        if (array[i].nameOfPurchase === myPurchase.nameOfPurchase) {
            array[i].quantity += myPurchase.quantity; break;
        }
        // ДОДЕЛАТЬ!
    }
    array.push(myPurchase);
    // for (let i = 0; i < array.length; i++) {
    //     if ()
    // }
    // if (array[i].)
    // array.push(myPurchase);

    // for (let i = 0; i < ListOfPurchase.length; i++) {
    // const pur = ListOfPurchase.find(pur => pur.nameOfPurchase === myPurchase.nameOfPurchase);
    // if (!pur)
    //     ListOfPurchase.push(myPurchase);
    // pur.amount += myPurchase.amount;
    // if (myPurchase.nameOfPurchase === array[i].nameOfPurchase) {
    //     let resultQuantity = myPurchase.quantity + array[i].quantity;
    //     myPurchase.quantity = resultQuantity;
    // }
    // else { 
    //     array.push(myPurchase);
    // }
    // }
}

const myPurchase1 = new Purchase("Sugar", 1, false);

AddPurchase(ListOfPurchase, myPurchase1);

ShowArray(ListOfPurchase);