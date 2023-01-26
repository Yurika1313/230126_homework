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
      
         if (label == "cola" && yen >= vendingMachine.cola.price){
            console.log("You can get cola!");
            vendingMachine.cola.stock = vendingMachine.cola.stock -1;
            console.log("We have " + vendingMachine.cola.stock + " left in stock");
            if(1 > vendingMachine.cola.stock -1){
                console.log("but...Out of stock,sorry...");
                }
         }else if(label == "tea" && yen >= vendingMachine.tea.price ){
            console.log("You can get tea!");
            vendingMachine.tea.stock = vendingMachine.tea.stock -1;
            console.log("We have " + vendingMachine.tea.stock + " left in stock");
            if(1 > vendingMachine.tea.stock -1){
                console.log("but...Out of stock,sorry...");
                }
         }else if(label === "coffee" && yen >= vendingMachine.coffee.price ){
            console.log("You have money to get coffee!");
            if(1 > vendingMachine.coffee.stock -1){
            console.log("but...Out of stock,sorry...");
            }
         }else{
            console.log("You cannot get it... Prease put more money.")
         }
    }

    order.prototype = {
        getData : function() {
          return "The money I put in is [" + this.yen + "]; The drink of choice is [" + this.label + "].";
        }
      };

//Mike：order(入れるお金(yen)、欲しい飲み物(label))を入力してください。
console.log("*Mike*");
var Mike = new order(200,"tea");
    console.log(Mike.getData());

//Anna：order(入れるお金(yen)、欲しい飲み物(label))を入力してください。
console.log("*Anna*");
var Anna = new order(200,"coffee");
console.log(Anna.getData());


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

