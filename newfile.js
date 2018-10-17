var cart = [];
var shop = "a"
while(shop.toLowerCase()!="done" && shop!=[]){
    shop = prompt(`Add an item to your Cart(${cart.length})`);
    if(shop==[]){}
    else if(shop.toLowerCase() != "done"){
        cart.push(shop);
    }
        
    }
if(cart.length == 0){
    console.log("Your cart is empty!");
}else{
    console.log("The contents of your cart are:");
    count = 0;
    while (count<cart.length){
        console.log(`${count+1}. ${cart[count]}`)
        count += 1;
    }

}

