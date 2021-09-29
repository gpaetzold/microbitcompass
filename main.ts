let direction = 0
basic.pause(200)
basic.showIcon(IconNames.Happy)
input.calibrateCompass()
basic.forever(function () {
    direction = input.compassHeading()
    if (direction > 260 && direction < 280) {
        basic.showString("W")
    }
    if (direction > 170 && direction < 190) {
        basic.showString("S")
    }
    if (direction > 80 && direction < 100) {
        basic.showString("O")
    }
    if (direction > 0 && direction < 10) {
        basic.showString("N")
    }
})
