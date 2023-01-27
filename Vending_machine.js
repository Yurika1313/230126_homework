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

function order(yen, label){
    this.yen = yen;
    this.label = label;
      
         if (yen >= vendingMachine[label].price){
            if(0 < vendingMachine[label].stock ){
                console.log("You can get " + this.label + "!");
            vendingMachine[label].stock = vendingMachine[label].stock -1;
            console.log("We have " + vendingMachine[label].stock + " left in stock");
                }
            else if(0 == vendingMachine[label].stock ){
                console.log("Out of stock,sorry...");
                }
         }else{
            console.log("You cannot get it... Prease put more money.")
         }
    }

    order.prototype = {
        getData : function() {
          return "The money you put in is [" + this.yen + "]; The drink of choice is [" + this.label + "].";
        }
      };

//Mike：order(入れるお金(yen)、欲しい飲み物(label))を入力してください。
console.log("*Mike*");
var Mike = new order(200,"cola");
    console.log(Mike.getData());

//Anna：order(入れるお金(yen)、欲しい飲み物(label))を入力してください。
console.log("*Anna*");
var Anna = new order(200,"coffee");
console.log(Anna.getData());

//Tom：order(入れるお金(yen)、欲しい飲み物(label))を入力してください。
console.log("*Tom*");
var Tom = new order(100,"tea");
console.log(Tom.getData());


console.log("The type of drink is [" + Object.keys(vendingMachine) + "]."); 



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

