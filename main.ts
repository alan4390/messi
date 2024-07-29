let juego = 0
input.onGesture(Gesture.Shake, function () {
    juego = randint(0, 2)
    if (juego == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (juego == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
