

function defaultSound(){
    // functional for default audio sound
    var context = new AudioContext()

    // context.createMediaStreamSource("score.wav")
    var oscillator = context.createOscillator()
    // oscillator.setPeriodicWave('score.wav')
    oscillator.type = 'sine'
    oscillator.frequency.value = 800
    oscillator.connect(context.destination)
    oscillator.start()
    setTimeout(()=>{
      oscillator.stop()
    },100)
}

export default defaultSound