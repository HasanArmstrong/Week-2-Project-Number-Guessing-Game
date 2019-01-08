function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// global variables
let pastGuesses= [];
let numberGuesses=5;
let answer= getRandomInt(1,10);

//reset button
document.getElementById("reset").addEventListener("click", function(){
pastGuesses=[];
numberGuesses=5;
answer= getRandomInt(1,10);
document.getElementById("message").innerHTML="Guess a number between one and ten";
document.getElementById("previousButton").innerHTML="Previous Guess";
document.getElementById("message").style.backgroundColor="white";
});

//previous guesses button
document.getElementById("previousButton").addEventListener("click", function(){
document.getElementById("previousButton").innerHTML=`Previous Guess: ${pastGuesses}`;
});

//guess button
document.getElementById("guessButton").addEventListener("click", function(){

var input=document.getElementById("number").value;
var integer= parseInt(input,10);
pastGuesses.unshift(integer);

if (numberGuesses===0) {
document.getElementById("message").innerHTML="Sorry, you've run out of guesses :(";
}

else if (answer===integer) {
document.getElementById("message").innerHTML=`Well done! ${answer} was the correct answer, you had ${numberGuesses} guesses left!`;

document.getElementById("message").style.backgroundColor="green";
}

else if(answer > integer){
document.getElementById("message").innerHTML=`Sorry your guess is too low, you have ${numberGuesses} guesses left`;

document.getElementById("message").style.backgroundColor="red";
numberGuesses--;

document.getElementById("previousButton").innerHTML=`Previous Guess: ${pastGuesses}`;
}

else if(answer < integer){
document.getElementById("message").innerHTML=`Sorry your guess is too high you have ${numberGuesses} guesses left`;

document.getElementById("message").style.backgroundColor="red";
numberGuesses--;

document.getElementById("previousButton").innerHTML=`Previous Guess: ${pastGuesses}`;
}

else {
document.getElementById("message").innerHTML="Please enter a number!"
}

});
