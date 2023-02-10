makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    COMMAND = makerbit.irButton()
})
let COMMAND = 0
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
basic.showIcon(IconNames.Square)
basic.pause(1000)
let FWD = true
let FSPEED = 50
let SPDMAX = 245
let TRIM = 10
let LEFT = FSPEED
let RIGHT = FSPEED
let TSPEED = 40
let LAST = -1
COMMAND = 0
basic.clearScreen()
led.enable(true)
basic.forever(function () {
    if (COMMAND <= 0) {
    	
    } else {
        if (COMMAND == 66) {
            FWD = true
            LEFT = FSPEED
            RIGHT = FSPEED
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, FSPEED)
        } else if (COMMAND == 176) {
            if (LAST != 112) {
                COMMAND = LAST
            } else {
                COMMAND = 0
            }
            basic.showNumber(COMMAND)
        } else {
            LAST = COMMAND
        }
        if (COMMAND == 82) {
            maqueen.motorStop(maqueen.Motors.All)
            music.playTone(131, music.beat(BeatFraction.Half))
            basic.showIcon(IconNames.Chessboard)
            basic.clearScreen()
        } else if (COMMAND == 34) {
            if (LEFT > TRIM) {
                LEFT += 0 - TRIM
            } else {
                LEFT = 0
                if (RIGHT < SPDMAX) {
                    RIGHT += TRIM
                } else {
                    RIGHT = SPDMAX
                }
            }
            if (FWD) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
            }
        } else if (COMMAND == 194) {
            if (RIGHT > TRIM) {
                RIGHT += 0 - TRIM
            } else {
                RIGHT = 0
                if (LEFT < SPDMAX) {
                    LEFT += TRIM
                } else {
                    LEFT = SPDMAX
                }
            }
            if (FWD) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
            }
        } else if (COMMAND == 98) {
            FWD = true
            if (LEFT < SPDMAX) {
                LEFT += TRIM
            } else {
                LEFT = SPDMAX
            }
            if (RIGHT < SPDMAX) {
                RIGHT += TRIM
            } else {
                RIGHT = SPDMAX
            }
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
        } else if (COMMAND == 168) {
            FWD = false
            LEFT = FSPEED
            RIGHT = FSPEED
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
        } else if (COMMAND == 2) {
            if (LEFT < SPDMAX) {
                LEFT += TRIM
            } else {
                LEFT = SPDMAX
            }
            if (RIGHT < SPDMAX) {
                RIGHT += TRIM
            } else {
                RIGHT = SPDMAX
            }
            if (FWD) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
            }
        } else if (COMMAND == 74) {
            if (LEFT > TRIM) {
                LEFT += 0 - TRIM
            } else {
                LEFT = 0
            }
            if (RIGHT > TRIM) {
                RIGHT += 0 - TRIM
            } else {
                RIGHT = 0
            }
            if (FWD) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, RIGHT)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, LEFT)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, RIGHT)
            }
        } else {
        	
        }
        COMMAND = 0
    }
})
