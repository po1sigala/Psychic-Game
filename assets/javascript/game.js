/* all of my variables. I want an array of the alphabet, a win count, a loss count, a guesses count, and possibly my list of previous guesses goes here???*/
var letters = ["a","b","c","d","e","f","g","H","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0
var losses = 0
var guesses = 10
var previousGuesses 
var solution =  letters[Math.floor(Math.random()*letters.length)];//error is here
//below are my console logs which shoudl be used to debug.
console.log(solution);
console.log(guesses);
//reseting game
// document.getElementById().addEventListener("click", clear);
// logging guesses
// document.onkeypress = function(event) {
//     var userGuess = event.key.toLocaleLowerCase();
    // previousGuesses.push(userGuess);
    document.addEventListener("keypress", function(event) { 

        if (event.key === solution) { //if i set it equal to event.keypres it works fo for some reason it doesnt know what solution is...
           
            wins++
        } else{
            guesses --
        }
       document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('wins').innerHTML =  wins;
})

    if(guesses === 0){
        losses++;
        guesses+10;
        document.getElementById("losses").innerHTML = losses;
    };
console.log('guess',guesses);
  
    // document.getElementById('losses').innerHTML = losses;
 
