var menu = []
//    {
//    item: "Pizza",
//    price: 10,
//    },
//{
//    item: "Pad Thai",
//    price: 15,
//    },
//    {
//    item: "Cupcake",
//    price: 5,
//    }

function MenuItem(item, price, description) {
    this.item = item;
    this.price = price;
    this.description = description;
}


var pizza = new MenuItem("Pizzaaaa", 10, "Brazilian Pizza");
var padThai = new MenuItem("Pad Thai", 15, "Extra Spicy");
var cupcake = new MenuItem("Cupcake", 5, "Amazazing");


menu.push(pizza, padThai, cupcake);

console.log(menu);

for (var i = 0; i < menu.length; i++) {
document.getElementById("jsitems").innerHTML += "<li>" + menu[i].item  + "<br><span>" + menu[i].description + "</span></li>";
}

for (var i = 0; i < menu.length; i++) {
document.getElementById("jsprices").innerHTML += "<li>$" + menu[i].price + "<br><br></li>";
}