document.getElementById("addbutton").addEventListener("click", function () {
        var inputtext = document.getElementById("todotext").value;
        var priceinput = document.getElementById("price").value;
        var descriptioninput = document.getElementById("description").value;
//        var newlist = document.getElementById("ulist");
        var newItem = new TodoListItem(inputtext, priceinput, descriptioninput);
   axios.post("https://api.vschool.io/arles/todo", newItem).then(function (response) {});
    //    newlist.innerHTML += "<li>" + newItem.title + newItem.price + newItem.description + "</li>";
})
document.getElementById("getbutton").addEventListener("click", function () {

    axios.get("https://api.vschool.io/arles/todo").then(function (response) {
//        var inputtext = document.getElementById("todotext").value;
//        var priceinput = document.getElementById("price").value;
//        var descriptioninput = document.getElementById("description").value;
        var newlist = document.getElementById("ulist");
//        var newItem = new TodoListItem(inputtext, priceinput, descriptioninput)
        for (var i = 0; response.data.length; i++) {
        newlist.innerHTML += "<div class=listdiv1><input type='checkbox' id='checkbox'><li class='item'>" + response.data[i].title + "</li></div><div class='listdiv2'><li> $" + response.data[i].price + "</li></div><div class='listdiv3'><li class='descriptionlist'>" + response.data[i].description + "</li></div>"
        }
            
//            "<input type='checkbox' id='checkbox'><li>" + newItem.title + newItem.price + newItem.description + "</li>";
    });
})


    

function TodoListItem(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;

}
