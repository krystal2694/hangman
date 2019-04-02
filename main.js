let movies = ["CITIZEN KANE", "CAPTAIN MARVEL", "THE GODFATHER", "SPIRITED AWAY",
"PULP FICTION", "BOHEMIAN RHAPSODY", "SLEEPING BEAUTY", "SHUTTER ISLAND",
"SAVING PRIVATE RYAN", "COMMITEE"];

let movies_define = ["Key word: Rosebud", "An extraterrestrial Kree warrior", "Based on Mario Puzo's novel",
"Animated feature by noted Japanese director Hayao Miyazaki", "Based on a story by Tarantino and Roger Avary",
"Key words: Queen & Freddie Mercury", "A classic fairy-tale about Little Briar Rose",
"Summary: A U.S. Marshal investigaes the disappearance of a murderer, who escaped from a hospital for the criminally insane.",
"Summary: A group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
"Definition: A group of people appointed for a specific function."]

let lives = 7;
let movie = generateMovie()
let hiddenPhrase = [];
let score = 0;
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
    document.getElementById('lives').innerHTML = 7
}

function generateMovie(){
    let randomNum = Math.floor(Math.random() * movies.length);
    let movie = movies[randomNum];
    displayDefinition(randomNum);
    return movie
}


function displayDefinition(randomNum){
    document.getElementById("definition").innerHTML = movies_define[randomNum];
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
        document.getElementById('lives').innerHTML = 'You lost!';
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
            document.getElementById('lives').innerHTML= lives;
            return true;
        } else {
            document.getElementById('lives').innerHTML= lives-= 1;
            if (score > 0) {
                score -= 1;
            }
            displayScore();
            return false;
        }
    }
}

function revealCharacter(value) {
    for (let i = 0; i < movie.length; i++) {
        if (movie[i] == value) {
            score += 1;
            hiddenPhrase.splice(i, 1, value);
            displayScore();
        }
    }
    document.getElementById("hiddenPhrase").innerHTML = hiddenPhrase.join("");    
}

function displayScore() {
    document.getElementById("score").innerHTML = score;
}