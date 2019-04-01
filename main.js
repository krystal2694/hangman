let movies = ["CITIZEN KANE", "CAPTAIN MARVEL", "THE GODFATHER", "SPIRITED AWAY",
"PULP FICTION", "BOHEMIAN RHAPSODY", "SLEEPING BEAUTY", "SHUTTER ISLAND",
"SAVING PRIVATE RYAN", "COMMITEE"];
let lives = 7;
let movie = generateMovie()
let hiddenPhrase = [];
createButtons()
displayPhrase(movie)
document.getElementById('resetButton').onclick = resetButton;


function resetButton(){
    document.getElementById('buttons').innerHTML = '';
    createButtons();
    document.getElementById('hiddenPhrase').innerHTML = '';
    hiddenPhrase = [];
    displayPhrase(generateMovie());
    lives = 7;
    changeImages();
    document.getElementById('score').innerHTML = 7
}

function generateMovie(){
    let movie = movies[Math.floor(Math.random() * movies.length)];
    return movie
}

function createButtons() {
    for (let i = 1; i <=26; i++) {
        let btn = document.createElement("button");
        document.getElementById("buttons").appendChild(btn);
        btn.innerHTML = String.fromCharCode(i + 64);
        btn.className = "letters";
        btn.id = String.fromCharCode(i + 64);
        btn.addEventListener("click", function() {
            clickButton(btn);
        });
    };
};

function clickButton(btn) {
    if (lives != 0) {
        checkCharacter(btn.innerHTML);
        revealCharacter(btn.innerHTML);
        displayLives();
        console.log(lives);
        changeImages();
        btn.disabled = true;
    }
}

function changeImages(){
    if (lives == 6) {
        document.getElementById('hangmanImage').src = './images/hangman_1.png'
    } else if (lives == 5) {
        document.getElementById('hangmanImage').src = './images/hangman_2.png'
    } else if (lives == 4) {
        document.getElementById('hangmanImage').src = './images/hangman_3.png'
    } else if (lives == 3) {
        document.getElementById('hangmanImage').src = './images/hangman_4.png'
    } else if (lives == 2) {
        document.getElementById('hangmanImage').src = './images/hangman_5.png'
    } else if (lives == 1) {
        document.getElementById('hangmanImage').src = './images/hangman_6.png'
    } else if (lives == 0) {
        document.getElementById('hangmanImage').src = './images/hangman_7.png'
    } else if (lives == 7) {
        document.getElementById('hangmanImage').src = './images/hangman_0.png'
    }
}

function displayLives(){
    if (lives == 0) {
        document.getElementById('score').innerHTML = 'You lost!';
    };
}

function displayPhrase(movie) {
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
    while (lives !== 0){
        if (movie.includes(value)) {
            document.getElementById('score').innerHTML= lives;
            return true;
        } else {
            document.getElementById('score').innerHTML= lives-= 1;
            return false;
        }
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