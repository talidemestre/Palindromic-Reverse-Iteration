var palString = "";
var step = 0;
var pal = Big(0);
var palInitial = "";


function calculatePalindrome(){
  var palString = document.getElementById("palInteger").value;
  var step = 0;
  var pal = Big(palString);
  var palInitial = palString;

  //console.log("The current value is " + pal + ".")

  calcLoop = window.setInterval(iteratePalindrome, 0.0000001);

  document.getElementById("start-button").onclick = function(){
    window.clearInterval(calcLoop);
    calculatePalindrome()
  };

  function iteratePalindrome(){
    if (palString == reverseString(palString)){
      document.getElementById("readout").innerHTML = "The integer " + palInitial + " takes " + step + " steps to reach the palindrome " + palString +"."
      window.clearInterval(calcLoop);
    }

    document.getElementById("readout").innerHTML = "The integer " + palInitial + " takes " + step + " steps to reach the palindrome " + palString +".";

    pal = pal.plus(Big(reverseString(palString)));
    step += 1;
    palString = pal.toFixed()
    //console.log("The current value is " + pal + ".")

  }
}


function reverseString(str) {
  return str.split("").reverse().join("");
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
