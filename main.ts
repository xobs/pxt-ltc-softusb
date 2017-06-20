let item = 0
loops.forever(() => {
    pins.digitalWritePinOn(DigitalPin.D1)
    loops.pause(500)
    pins.digitalWritePinOff(DigitalPin.D1)
    loops.pause(500)
    item = pins.digitalReadPin(DigitalPin.D2)
    pins.analogWritePin(AnalogPin.A5, item)
    pins.analogWritePin(AnalogPin.A0, 1023)
})
