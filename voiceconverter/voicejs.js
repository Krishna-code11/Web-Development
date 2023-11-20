const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
    const synth = window.SpeechSynthesis;
    const text =textarea.value;

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }

    if(text.length > 50) {
        if(synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        } else {
            button.innertext = "Resume";
            synth.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        button.innerText = "speaking";
    }
setInterval(() => {
    if(!synth.speaking && !isSpeaking) {
        isSpeaking = true;
        button.innerText = "convert to speech";
    }
});
};
button.addEventListener("click",textToSpeech);













