var answer = prompt("Guess a number between 1-100, (if answer isn't correct, you would beb prompted again)")
Number(answer);
 while (answer != 63) {
    var answer = prompt("Guess a number between 1-100")

}
 if (answer == 63) {
     alert("You guessed it, good job");
 }
 else{
     alert("Try again!")
 }