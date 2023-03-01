function ledFunc () {
    strip.showRainbow(1, 360)
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(1000)
strip.clear()
strip.show()
