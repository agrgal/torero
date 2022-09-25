basic.showString("Hola")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 125)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 125)
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    basic.pause(200)
})
