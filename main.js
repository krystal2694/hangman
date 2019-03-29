let lives = 7;
function createButtons() {
    for (let i = 1; i <=26; i++) {
        let btn = document.createElement("button");
        document.getElementById("buttons").appendChild(btn);
        btn.innerHTML = String.fromCharCode(i + 64);
        btn.class = "letters";
        btn.id = String.fromCharCode(i + 64);
        btn.style.borderRadius = "4px";
        btn.style.backgroundColor = "#AFEEEE";
        btn.style.width = "35px";
        btn.style.height = "30px";

        btn.addEventListener("click", function() {
            // document.getElementById('score').innerHTML= lives-= 1;
            displayLives()
            console.log("Button " + String.fromCharCode(i + 64) + " was clicked");
            btn.disabled = true;
            console.log(checkCharacter(btn.innerHTML));
            revealCharacter(btn.innerHTML);

        });
    };
};

function displayLives(){
    if (lives == 1) {
        document.getElementById('score').innerHTML = 'You lost!'
        btn.disabled = true;
    }
}
let movies = ["CITIZEN KANE", "CAPTAIN MARVEL", "THE GODFATHER", "SPIRITED AWAY",
"PULP FICTION", "BOHEMIAN RHAPSODY", "SLEEPING BEAUTY", "SHUTTER ISLAND",
"SAVING PRIVATE RYAN", "COMMITEE"];

let movie = movies[Math.floor(Math.random() * movies.length)];
console.log(movie)
let hiddenPhrase = [];

function displayPhrase() {
    for (let i = 0; i < movie.length; i++) {
        if (movie[i] == " ") {
            hiddenPhrase.push("  ");
        } 
        else {
        hiddenPhrase.push("_ ");
        };
    };
    console.log(hiddenPhrase);
    document.getElementById("hiddenPhrase").innerHTML = hiddenPhrase.join("");
};

function checkCharacter(value){
    if (movie.includes(value)) {
        document.getElementById('score').innerHTML= lives-= 0;
        return true;
    } else {
        document.getElementById('score').innerHTML= lives-= 1;
        return false;
    }
}

function revealCharacter(value) {
    for (let i = 0; i < movie.length; i++) {
        if (movie[i] == value) {
            hiddenPhrase.splice(i, 1, value);
        }
    }
    document.getElementById("hiddenPhrase").innerHTML = hiddenPhrase.join("");

}