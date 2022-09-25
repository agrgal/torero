basic.showString("Hola")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 90)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
