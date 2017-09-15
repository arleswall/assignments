var list = [" loops", " conditionals", " arrays", " strings", " event handlers", " external css/js", " functions"];


function displayNoLoop() {
    var condition = confirm("This is an if statement. The array will only be presented if you press OK")
    
    if (condition == true){   
    document.write("The requirements are: ", list);
    }
}

function displayLoop() {
    var condition = confirm("This is an if statement. The list will only be presented if you press OK")
    
    if (condition == true){
        
         for (var i=0; i<list.length; i++) {
            document.write(list[i]+"<br>");
         }
     //   document.write(list);
    }
}

