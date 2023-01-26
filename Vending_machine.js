let vendingMachine = {
    cola: {
        stock: 10,
        defaultStock: 10,
        price: 150
    },
    tea: {
        stock: 10,
        defaultStock: 20,
        price: 150
    },
    coffee: {
        stock: 0,
        defaultStock: 15,
        price: 200
    }
};
//console.log(vendingMachine);

/* Ninja */
function refillDrink (){
    let refillVM = {};

    for (const drinkName of Object.keys(vendingMachine)) {
        let difference;
        
        difference = vendingMachine[drinkName].defaultStock - vendingMachine[drinkName].stock;
        refillVM[drinkName] = {stockDifference: difference};
        vendingMachine[drinkName].stock = vendingMachine[drinkName].defaultStock;
    }
    
    for (const drinkName of Object.keys(refillVM)) {
        if (refillVM[drinkName].stockDifference != 0) {
            console.log(drinkName + ": stockDifference: " + refillVM[drinkName].stockDifference);
        }
    }
}

refillDrink();