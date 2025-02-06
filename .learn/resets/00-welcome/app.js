// // Esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // Solo un registro en consola para nosotros
// console.log(sum(7,3))

// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };

// --------------------------------------------------------------

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollartoYen (dollar) {
    let Yen = 0;
    Yen = oneEuroIs.JPY*dollar/oneEuroIs.USD
    return Yen
}

function fromEuroToDollar (euro) {
    let Dollar = 0;
    Dollar = oneEuroIs.USD*euro
    return Dollar
}

function fromYenToPound (yen) {
    let Pound = 0;
    Pound = oneEuroIs.GBP*yen/oneEuroIs.JPY
    return Pound
}

console.log(fromEuroToDollar(3.5))

module.exports = { fromEuroToDollar, fromDollartoYen, fromYenToPound }