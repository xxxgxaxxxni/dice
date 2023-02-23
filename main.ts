input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 49))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
})
basic.showString("W~")
