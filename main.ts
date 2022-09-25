basic.showString("Hola")
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) > 18) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
            music.playTone(349, music.beat(BeatFraction.Whole))
        } else {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(200)
        }
    }
})
