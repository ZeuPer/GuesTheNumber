var number = Math.floor(Math.random() * 100) + 1;
var tries = 10;

function calcularColor(n){
    var percent = Math.abs(number-n)/Math.max(100-number, number);
    var red = Math.round(255*(percent));
    var green = Math.round(255*(1-percent));
    return "rgb(" + red + "," + green + ",0)";
}

function success() {
    if(document.getElementById("input").value==="") { 
           document.getElementById('button').disabled = true; 
    } else { 
           document.getElementById('button').disabled = false;
    }
}

function toGuess(){
    var input = document.getElementById("input").value;
    document.getElementById("colorbox").style.backgroundColor = calcularColor(input);
    if(input == number){
        document.getElementById("output").innerHTML = "You guessed the number! It was " + number + ".";
        alert("You guessed the number! It was " + number + ".");
        document.location.reload()
    }
    else{
        tries--;
        document.getElementById("tries").innerHTML = tries;
        if(tries == 0){
            document.getElementById("output").innerHTML = "You lost! The number was " + number + ".";
            alert("You lost! The number was " + number + ".");
            document.location.reload()
        }
        //document.getElementById("input").value="";
    }
}
