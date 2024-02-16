

function differentLibraries(sound){
    // const audio = new Audio("score.wav")
    // audio.volume = 0.0
    if(navigator.mediaDevices){
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
        // const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    
        // const oscillator = audioCtx.createOscillator()
        // const gainNode = audioCtx.createGain()
    
        // oscillator.connect(gainNode)
        // gainNode.connect(audioCtx.destination)
    
        // gainNode.gain.value = 0.8
        
        // oscillator.frequency.value = 800
        // oscillator.type = 'sine'
    
        // oscillator.start()
        sound.play()
    
        // setTimeout(()=>{
        //     oscillator.stop()
        // },200)
    })
    }
}


export default differentLibraries