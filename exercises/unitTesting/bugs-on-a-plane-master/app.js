var form = document.airlineform;


document.getElementById("submit").addEventListener("click", function(){

    var firstName = form.firstname.value;
    var lastName = form.lastname.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travellocation.value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " +  diet + "\nAwesome, now if you die, it won't be an accident..");
});