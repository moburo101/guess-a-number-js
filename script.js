var answer = prompt("Guess a number between 1-100, REFRESH UNTIL YOU GET IT CORRECT")
Number(answer);
if (answer == 63) {
    alert("You guessed it, good job");
}
else if (answer > 63) {
    alert("Too high, go lower");
}
else{
    alert("Too low, a bit higher");
}