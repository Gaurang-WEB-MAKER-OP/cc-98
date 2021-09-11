var SpeechRecongnition = window.webKitSpeechRecognition;
var recongnition = new SpeechRecongnition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recongnition.start()


}
recongnition.onresult = function(event) {
    console.log(event);

    var Content = event.result[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis)

}