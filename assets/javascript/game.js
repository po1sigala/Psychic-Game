/* all of my variables. I want an array of the alphabet, a win count, a loss count, a guesses count, and possibly my list of previous guesses goes here???*/
var letters = ["a","b","c","d","e","f","g","H","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var previousGuesses = []
var solution =  letters[Math.floor(Math.random()*letters.length)];//error is here
//below are my console logs which shoudl be used to debug.
console.log(solution);

//i created functions which handle losses, wins, and clikcing new game which is a total reset
function newGame(){
    wins = 0;
    losses = 0;
    guesses = 10;
    previousGuesses= []
    letters[Math.floor(Math.random()*letters.length)];
    document.getElementById("losses").innerHTML = losses;
    document.getElementById('guesses').innerHTML= guesses;
    document.getElementById('wins').innerHTML= wins;
    document.getElementById("previousGuesses").innerHTML= previousGuesses;
    
}
function loss(){
    losses++;
    guesses = 10;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById('guesses').innerHTML= guesses;
    solution =letters[Math.floor(Math.random()*letters.length)];
    previousGuesses=[];
    document.getElementById("previousGuesses").innerHTML= previousGuesses;
    console.log(solution);

}
function win(){
    wins++;
    document.getElementById('wins').innerHTML= wins;
    solution =letters[Math.floor(Math.random()*letters.length)];
    previousGuesses=[];
    document.getElementById("previousGuesses").innerHTML= previousGuesses;
    console.log(solution);

}
//below is the logic which says when to run the above functions
    document.addEventListener("keypress", function(event) { 
    event.key===event.key.toLowerCase();
    console.log(event.key + event.key.toLowerCase());
        previousGuesses.push(event.key);

        if (event.key.toLowerCase() === solution) { 
           win();
        } else{
            guesses --
            document.getElementById('guesses').innerHTML= guesses;
            document.getElementById("previousGuesses").innerHTML=previousGuesses;
        }
        if(guesses === 0){
            loss();
        }
})
document.getElementById("btn").addEventListener("click", function(){
    newGame();
    console.log("reset!");
  });
 
