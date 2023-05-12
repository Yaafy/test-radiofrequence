radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(68)
basic.forever(function () {
    radio.sendNumber(7)
    radio.sendString("f u hehe")
})
