document.getElementById("button").addEventListener("click", function () {
    var first = document.form.first.value;
    var last = document.form.last.value;
    var age = document.form.age.value;
    var gender = document.form.gender.value;
    var destination = document.form.destination.value;
    var date = document.form.date.value;
    var diet = document.form.diet;
    var dietRestrictions = []
    var dietlength = document.form.diet.length
    for (var i = 0; i < dietlength; i++) {
        if (diet[i].checked === true) {
            dietRestrictions.push(diet[i].value)
        }
    }
    alert(`Hello ${first} ${last}!!
Please double check your info: 
Age: ${age} 
Gender: ${gender}
You are traveling to ${destination} on ${date}!
We'll keep in mind your dietary restrictions are:
${dietRestrictions.join("\n")}.`)

})


//    alert("Hello " + first + " " + last + "!!\nPlease double check your info:\nAge:" + age + "\nGender: " + gender + "\nYou are traveling to " + destination + " on " + date + "!\nWe'll keep in my your dietary restrictions are:\n" + dietRestrictions.join("\n") + ".");