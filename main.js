var speechrecognition = window.webkitSpeechRecognition;

var recognition = new speechrecognition();

function start(){
    document.getElementById("textbutt").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    butt = event.results[0][0].transcript;
    document.getElementById("textbutt").value = butt;
    if(butt == "take my selfie"){
        console.log("take my selfie --");
        speak();
    }

}
function speak(){
    Webcam.attach('#dbutt1');
}
Webcam.set({
    width : 380,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 100
});