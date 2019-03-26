function createButtons() {
    for (let i = 1; i <=26; i++) {
        let btn = document.createElement("button");
        document.getElementById("buttons").appendChild(btn);
        btn.innerHTML = String.fromCharCode(i + 64);
        btn.class = "letters";
        btn.style.borderRadius = "4px";
        btn.style.backgroundColor = "#AFEEEE";
        btn.style.width = "35px";
        btn.style.height = "30px";

        btn.addEventListener("click", function() {
            console.log("Button " + String.fromCharCode(i + 64) + " was clicked")
        });
    };
};

let movies = ["CITIZEN KANE", "CAPTAIN MARVEL", "THE GODFATHER", "SPIRITED AWAY",
"PULP FICTION", "BOHEMIAN RHAPSODY", "SLEEPING BEAUTY", "SHUTTER ISLAND",
"SAVING PRIVATE RYAN", "COMMITEE"];

let movie = movies[Math.floor(Math.random() * movies.length)];
console.log(movie)

function displayPhrase() {
    let hiddenPhrase = "";
    for (let i = 0; i < movie.length; i++) {
        if (movie[i] == " ") {
            hiddenPhrase += "  ";
        } 
        else {
        hiddenPhrase += "_ ";
        };
    };
    console.log(hiddenPhrase);
    document.getElementById("hiddenPhrase").innerHTML = hiddenPhrase;
};

