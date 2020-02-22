let money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    a = prompt("Введите обязательную статью расхода в этом месяце", '');
    b = +prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');  
        appData.expenses[a] = b; 
    } else {
        console.log ("error");
        i--;
    };


// Цикл Do...While
// let i = 0;
// do {
// let a = prompt("Введите обязательную статью расхода в этом месяце", ''),
//     b = +prompt("Во сколько обойдется?", '');
// if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//   console.log('done');  
//    appData.expenses[a] = b; 
// } else {
//    console.log ("error");
//    i--;
// };
// i++;
// }
// while(i < 2);

// Цикл while 
// let i = 0;
// while(i < 2) {
// let a = prompt("Введите обязательную статью расхода в этом месяце", ''),
//     b = +prompt("Во сколько обойдется?", '');
// if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//   console.log('done');  
//    appData.expenses[a] = b; 
// } else {
//    console.log ("error");
//    i--;
// }
// i++;
// }


    
    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");

    if(appData.moneyPerDay < 2000) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 5000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
    
}

