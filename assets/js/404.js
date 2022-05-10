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
      window.speechSynthesis.cancel();
      let utter = new SpeechSynthesisUtterance(output);
      utter.lang = "en";
      var voices = window.speechSynthesis.getVoices();
	  utter.voice = voices[0]; 
      utter.volume = 1;
      utter.rate = 1;
      utter.pitch = 1;
      utter.text = output;
      console.log(utter);
      setTimeout(function() {
        window.speechSynthesis.speak(utter);
      }, 1000);
    }
  }
}

redirect();
