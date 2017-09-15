document.getElementById("add-todo").addEventListener("submit", function (event) {
    event.preventDefault();
    // Get text from the input box
    var newTodo = document.getElementById("new-todo-text");

    var list = document.getElementById("todo-list");
    // Add a new li
    list.innerHTML += "<li>" + newTodo.value + "</li>";

    newTodo.value = "";
    newTodo.focus();
})
