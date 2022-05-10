var segment = 1;

function redirect() {
  var hidden = window.location.href; 
  var url = hidden.substring(hidden.indexOf("?")+1);
  var text = String(url);
  console.log("test" + text);
  const splitText = text.split("=");
  if (splitText[0] == "output") {
    input = splitText[1];
    const splitInput = input.split(".");
    console.log(output);
    console.log("0" + splitInput[0]);
    console.log("1" + splitInput[1]);
    output = splitInput[0];
    output = output.replaceAll("+", " ");
    document.getElementById("output").innerHTML = output;
    if (splitInput[1] !== "muted") {
      console.log(output);
      setTimeout(function() {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(output));
      }, 1000);
    }
  }
}

redirect();
