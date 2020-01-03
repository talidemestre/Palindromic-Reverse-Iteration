var palString = "";
var step = 0;
var pal = Big(0);
var palInitial = "";

function calculatePalindrome(){
  var palString = document.getElementById("palInteger").value;
  var step = 0;
  var pal = Big(palString);
  console.log("initial pal string is " + palString)
  var palInitial = palString;

  console.log(pal);
  console.log("pal is" + pal)

  calcLoop = window.setInterval(iteratePalindrome, 0.01);

  function iteratePalindrome(){
    if (isPalindrome(palString)){
      document.getElementById("readout").innerHTML = "The integer " + palInitial + " takes " + step + " steps to reach the palindrome " + palString +"."
      window.clearInterval(calcLoop);
      console.log("should stop")
    }

    document.getElementById("readout").innerHTML = "The integer " + palInitial + " takes " + step + " steps to reach the palindrome " + palString +"."

    console.log("calculating")
    console.log(pal)
    //pal += 1;
    pal = pal.plus(Big(reverseString(palString)))
    step += 1;
    palString = pal.toFixed()
    console.log("pal string is" + palString)

  }
}

function isPalindrome(numString){
  if (numString == reverseString(numString)){
    return true;
    console.log("struth")

  } else {
    return false;
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
