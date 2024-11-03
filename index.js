
const keySounds = {
    a: './sounds/leftCrash.mp3',
    s: './sounds/tom1.mp3',
    d: './sounds/tom2.mp3',
    g: './sounds/kickbass.mp3',
    j: './sounds/tom3.mp3',
    k: './sounds/snare.mp3',
    l: './sounds/rightCrash.mp3',
  };
  
document.addEventListener("keypress", function(event) {
    const key = event.key.toLowerCase();
    const audioSource = keySounds[key];
  
    if (audioSource) {
      const audioElement = new Audio(audioSource);
      audioElement.play();
    }
  });

  