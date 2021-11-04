input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    Dice_2_R2 = Dice_1
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    Dice_1 = randint(1, 6)
    Dice_1 = Dice_1_R2
    basic.showNumber(Dice_1)
    basic.pause(500)
    Dice_2 = randint(1, 6)
    basic.showNumber(Dice_2)
    basic.pause(500)
    dice_3 = randint(1, 6)
    basic.showNumber(dice_3)
    basic.pause(500)
    dice_4 = randint(1, 6)
    basic.showNumber(dice_4)
    basic.pause(500)
    Dice_5 = randint(1, 6)
    basic.showNumber(Dice_5)
    basic.pause(500)
    Dice_6 = randint(1, 6)
    basic.showNumber(Dice_6)
    basic.pause(500)
})
let Dice_6 = 0
let Dice_5 = 0
let dice_4 = 0
let dice_3 = 0
let Dice_2 = 0
let Dice_1 = 0
let Dice_2_R2 = 0
let Dice_1_R2 = 0
Dice_1_R2 = randint(1, 6)
Dice_2_R2 = randint(1, 6)
