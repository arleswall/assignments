var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var jsondata = xhr.responseText;
        var data = JSON.parse(jsondata);
        //        console.log(data);
    }


function parsePokemon() {
    var pokemonAPI = data.objects[0].pokemon

    for (var i = 0; i < pokemonAPI.length; i++) {
    document.getElementById("poke").innerHTML += pokemonAPI[i].name + ", ";
           }
};

parsePokemon();
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
