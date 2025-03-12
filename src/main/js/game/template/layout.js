"use strict";

define({
    _BASE_APP: {
        children: ['background', 'gameAreas', 'logo', 'particles', 'winUpToLabel', 'winUpTo', 'transitionContainer', 'endGameNoPlaqueContainer']
    },

    /*
     * BACKGROUND
     */
    background: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_background'
        },
        portrait: {
            texture: 'portrait_background'
        }
    },
    transitionContainer: {
        type: 'container'
    },
    gameAreas: {
        type: 'container',
        children: ['symbolsBackground', 'bonusContainer', 'bonusBackground', 'bonusSymbolHoldingArea']
    },
    bonusSymbolHoldingArea: {
        type: 'container'
    },
    symbolsBackground: {
        type: 'sprite',
        children: ['infoBar', 'pointArray', 'pointArraySpineLayer'],
        landscape: {
            texture: 'base-large',
            x: '610',
            y: '98'
        },
        portrait: {
            texture: 'base-large',
            x: '20',
            y: '470'
        }
    },
    infoBar: {
        type: 'sprite',
        children: ['infoBarBG', 'infoBarText'],
        anchor: 0,
        x: 0,
        y: -30,
    },
    infoBarText: {
        type: 'text',
        string: 'infoBarText',
        style: 'infoBar',
        fontSize: 30,
        align: 'center',
        y: 10
    },
    infoBarBG: {
        type: 'sprite',
        texture: 'base',
    },
    particles: {
        type: 'container'
    },
    bonusContainer: {
        type: 'container',
        children: ['bonusWheelContainer', 'bonusScoreContainer'],
        landscape: {
            x: 920,
            y: 400,
            scale: 0.9
        },
        portrait: {
            x: 440,
            y: 718,
            scale: 0.85
        }
    },
    bonusScoreContainer: {
        type: 'container',
        children: ['totalWinBackground'],
        landscape: {
            x: -680,
            y: 110,
            scale: 0.8
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        }
    },
    totalWinBackground: {
        type: 'sprite',
        children: ['totalWinLabel', 'totalWinValue'],
        texture: 'win-panel',
        anchor: 0.5,
        portrait: {
            x: 180,
            y: -660
        },
        landscape: {
            x: 0,
            y: -20
        }
    },
    totalWinLabel: {
        type: 'text',
        style: 'bonusWinTitle',
        string: 'bonusWin',
        y: -60,
        anchor: 0.5,
        maxWidth: 400
    },
    totalWinValue: {
        type: 'text',
        style: 'bonusWinValue',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 200,
        y: -5
    },
    bonusWheelContainer: {
        type: 'container',
        children: ['bonusWheelFXLower', 'bonusWheelBottomBase', 'bonusWheelMiddleBase', 'bonusWheelTopBase', 'bonusArrow', 'bonusSpinButtonContainer', 'bonusWheelFXUpper', 'bonusWheelRespinTextContainer'],
        landscape: {
            x: 0,
            y: 0
        },
        portrait: {
            x: -40,
            y: -10
        }
    },
    bonusWheelRespinTextContainer: {
        children: ['bonusWheelRespinText'],
        type: 'container'
    },
    bonusWheelRespinText: {
        type: 'text',
        style: 'bonusWinValue',
        string: 'respin',
        anchor: 0.5,
        maxWidth: 400
    },
    bonusWheelFXLower: {
        type: 'container',
        landscape: {
            scale: 1.1
        }
    },
    bonusWheelFXUpper: {
        type: 'container',
        scale: 1.15,
        x: 3,
        y: 3
    },
    bonusArrow: {
        type: 'sprite',
        texture: 'selectorArrow',
        x: -500,
        y: -97
    },
    bonusWheelTopGem: {
        type: 'sprite',
        texture: 'ruby-particle',
        anchor: 0.5
    },
    bonusWheelTopRim: {
        type: 'sprite',
        texture: 'wheelInnerCircleRim',
        anchor: 0.5
    },
    bonusWheelTopShadow: {
        type: 'sprite',
        texture: 'small_wheel_shadow',
        anchor: 0.5,
        scale: 2.55
    },
    bonusWheelTopDiv: {
        type: 'sprite',
        texture: 'wheelInnerCircleDivs',
        anchor: 0.5
    },
    bonusWheelTopBase: {
        type: 'sprite',
        children: ['bonusWheelTopDiv', 'bonusWheelTopRim', 'bonusWheelTopShadow', 'bonusWheelTopGem'],
        texture: 'wheelInnerCircle',
        anchor: 0.5
    },
    bonusWheelMiddleRim: {
        type: 'sprite',
        texture: 'wheelMiddleCircleRim',
        anchor: 0.5
    },
    bonusWheelMiddleShadow: {
        type: 'sprite',
        texture: 'medium_wheel_shadow',
        anchor: 0.5,
        scale: 1.55
    },
    bonusWheelMiddleDiv: {
        type: 'sprite',
        texture: 'wheelMiddleCircleDivs',
        anchor: 0.5
    },
    bonusWheelMiddleBase: {
        type: 'sprite',
        children: ['bonusWheelMiddleDiv', 'bonusWheelMiddleRim', 'bonusWheelMiddleShadow'],
        texture: 'wheelMiddleCircle',
        anchor: 0.5
    },
    bonusWheelBottomRim: {
        type: 'sprite',
        texture: 'wheelOuterCircleRim',
        anchor: 0.5
    },
    bonusWheelBottomDiv: {
        type: 'sprite',
        texture: 'wheelOuterCircleDivs',
        anchor: 0.5
    },
    bonusWheelBottomBase: {
        type: 'sprite',
        children: ['bonusWheelBottomDiv', 'bonusWheelBottomRim'],
        texture: 'wheelOuterCircle',
        anchor: 0.5
    },
    bonusSpinButtonContainer: {
        type: 'container',
        children: ['bonusSpinButton'],
        portrait: {
            x: 0,
            y: 440
        },
        landscape: {
            x: 470,
            y: 0
        }
    },
    bonusSpinButton: {
        type: 'button',
        textures: {
            enabled: 'spinButtonEnabled',
            over: 'spinButtonOver',
            pressed: 'spinButtonPressed',
            disabled: 'spinButtonDisabled'
        }
    },
    bonusBackground: {
        type: 'container',
        children: ['bonusSpineContainer', 'bonusPointContainer', 'bonusTitle', 'bonusTitleGold', 'bonusInfoText'],
        landscape: {
            // texture: 'bonus_base_bg_silver',/**/
            x: '130',
            y: '530'
        },
        portrait: {
            // texture: 'bonus_base_bg_silver',
            x: '410',
            y: '220'
        }
    },
    bonusInfoText: {
        type: 'text',
        string: 'bonusInfo',
        style: 'bonusInfo',
        anchor: 0.5,
        x: 180,
        y: 170,
        landscape: {
            maxWidth: 400
        },
        portrait: {
            maxWidth: 400
        }
    },
    bonusSpineContainer: {
        type: 'container'
    },
    bonusPointContainer: {
        type: 'container',
        x: 140
    },
    bonusTitle: {
        type: 'text',
        style: 'bonusLabel',
        string: 'bonus',
        anchor: 0.5,
        x: 190,
        y: 30,
        portrait: {
            maxWidth: 400
        },
        landscape: {
            maxWidth: 250
        }
    },
    bonusTitleGold: {
        type: 'text',
        style: 'bonusLabelGold',
        string: 'bonus',
        anchor: 0.5,
        maxWidth: 400,
        x: 190,
        y: 30
    },

    /*
     * LOGO
     */
    logo: {
        type: 'container',
        children: ['logoSpine', 'logoSprite'],
        landscape: {
            x: 330,
            y: 230,
            scale: 0.8
        },
        portrait: {
            x: 220,
            y: 240,
            scale: 0.8
        }
    },
    logoSprite: {
        type: 'spine',
        texture: 'ruby_logo',
        landscape: {
            x: -260,
            y: -320
        },
        portrait: {
            x: -260,
            y: -320
        }
    },
    logoSpine: {
        type: 'container'
    },
    winUpToLabel: {
        type: 'text',
        style: 'winUpToTitle',
        string: 'winUpTo',
        anchor: 0.5,
        landscape: {
            x: 315,
            y: 443,
            scale: 0.7,
            maxWidth: 350
        },
        portrait: {
            x: 595,
            y: 100,
            scale: 0.9,
            maxWidth: 400
        }
    },

    /*
     * WIN UP TO
     */
    winUpTo: {
        type: 'container',
        children: ['winUpToIn', 'winUpToOut'],
        landscape: {
            x: 315,
            y: 495,
            scale: 0.7
        },
        portrait: {
            x: 595,
            y: 170,
            scale: 1
        }
    },
    winUpToIn: {
        type: 'container',
        children: ['winUpToInText']
    },
    winUpToInText: {
        type: 'text',
        style: 'winUpTo',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 400
    },
    winUpToOut: {
        type: 'container',
        children: ['winUpToOutText']
    },
    winUpToOutText: {
        type: 'text',
        style: 'winUpTo',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 400
    },
    sparkleArray: {
        type: 'container',
        children: ['logoSparkle1', 'logoSparkle2', 'logoSparkle3', 'logoSparkle4', 'logoSparkle5']
    },
    logoSparkle1: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: 120,
        y: -190,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle2: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: -190,
        y: -190,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle3: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: -160,
        y: 20,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle4: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: 50,
        y: -10,
        anchor: 0.5,
        scale: 2
    },
    logoSparkle5: {
        type: 'sprite',
        texture: 'sparkle2-1',
        x: 120,
        y: 120,
        anchor: 0.5,
        scale: 2
    },

    /*
     * PLAYER NUMBERS
     */
    pointArray: {
        type: 'container',
        children: ['pickPoint1', 'pickPoint2', 'pickPoint3', 'pickPoint4', 'pickPoint5', 'pickPoint6', 'pickPoint7', 'pickPoint8', 'pickPoint9', 'pickPoint10', 'pickPoint11', 'pickPoint12', 'pickPoint13', 'pickPoint14', 'pickPoint15', 'pickPoint16', 'pickPoint17', 'pickPoint18', 'pickPoint19', 'pickPoint20'],
        landscape: {
            x: 0,
            y: -20
        },
        portrait: {
            x: 0,
            y: -20
        }
    },
    pointArraySpineLayer: {
        type: 'container',
        landscape: {
            x: 0,
            y: -20
        },
        portrait: {
            x: 0,
            y: -20
        }
    },
    pickPoint1: {
        type: 'container',
        x: 92,
        y: 123,
        scale: 1
    },
    pickPoint2: {
        type: 'container',
        x: 238,
        y: 123,
        scale: 1
    },
    pickPoint3: {
        type: 'container',
        x: 384,
        y: 123,
        scale: 1
    },
    pickPoint4: {
        type: 'container',
        x: 530,
        y: 123,
        scale: 1
    },
    pickPoint5: {
        type: 'container',
        x: 676,
        y: 123,
        scale: 1
    },
    pickPoint6: {
        type: 'container',
        x: 92,
        y: 245,
        scale: 1
    },
    pickPoint7: {
        type: 'container',
        x: 238,
        y: 245,
        scale: 1
    },
    pickPoint8: {
        type: 'container',
        x: 384,
        y: 245,
        scale: 1
    },
    pickPoint9: {
        type: 'container',
        x: 530,
        y: 245,
        scale: 1
    },
    pickPoint10: {
        type: 'container',
        x: 676,
        y: 245,
        scale: 1
    },
    pickPoint11: {
        type: 'container',
        x: 92,
        y: 369,
        scale: 1
    },
    pickPoint12: {
        type: 'container',
        x: 238,
        y: 369,
        scale: 1
    },
    pickPoint13: {
        type: 'container',
        x: 384,
        y: 369,
        scale: 1
    },
    pickPoint14: {
        type: 'container',
        x: 530,
        y: 369,
        scale: 1
    },
    pickPoint15: {
        type: 'container',
        x: 676,
        y: 369,
        scale: 1
    },
    pickPoint16: {
        type: 'container',
        x: 92,
        y: 490,
        scale: 1
    },
    pickPoint17: {
        type: 'container',
        x: 238,
        y: 490,
        scale: 1
    },
    pickPoint18: {
        type: 'container',
        x: 384,
        y: 490,
        scale: 1
    },
    pickPoint19: {
        type: 'container',
        x: 530,
        y: 490,
        scale: 1
    },
    pickPoint20: {
        type: 'container',
        x: 676,
        y: 490,
        scale: 1
    },

    /*
     * How To Play
     */
    howToPlayPages: {
        type: 'container',
        children: ['howToPlayPage1', 'howToPlayPage2'],
        portrait: {
            scale: 0.85
        },
        landscape: {
            scale: 1
        }
    },
    howToPlayPage1: {
        type: 'container',
        children: ['howToPlayPage1_1', 'howToPlayPage1_2', 'howToPlayPage1_3', 'howToPlayPage1_4'],
        landscape: {
            y: 10
        },
        portrait: {
            y: 120
        }
    },
    howToPlayPage2: {
        type: 'container',
        children: ['howToPlayPage2_1', 'howToPlayPage2_2', 'howToPlayPage2_3', 'howToPlayPage2_4'],
        landscape: {
            y: 50
        },
        portrait: {
            y: 190
        }
    },
    howToPlayPage1_1: {
        type: 'text',
        string: 'page1_line1',
        style: 'howToPlayText',
        fontSize: 30,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage1_2: {
        type: 'text',
        string: 'page1_line2',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage1_3: {
        type: 'text',
        string: 'page1_line3',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage1_4: {
        type: 'text',
        string: 'page1_line4',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage2_1: {
        type: 'text',
        string: 'page2_line1',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage2_2: {
        type: 'text',
        string: 'page2_line2',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage2_3: {
        type: 'text',
        string: 'page2_line3',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPage2_4: {
        type: 'text',
        string: 'page2_line4',
        style: 'howToPlayText',
        fontSize: 30,
        maxWidth: 800,
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            x: 430,
            wordWrapWidth: 1100,
            maxWidth: 800
        },
        portrait: {
            x: 300,
            wordWrapWidth: 500,
            maxWidth: 500
        }
    },
    howToPlayPrevious: {
        type: 'button',
        landscape: {
            x: 112,
            y: 418
        },
        portrait: {
            x: 64,
            y: 568
        },
        textures: {
            enabled: 'tutorialLeftButtonEnabled',
            disabled: 'tutorialLeftButtonDisabled',
            over: 'tutorialLeftButtonOver',
            pressed: 'tutorialLeftButtonPressed'
        }
    },
    howToPlayNext: {
        type: 'button',
        landscape: {
            x: 1300,
            y: 418
        },
        portrait: {
            x: 746,
            y: 568
        },
        textures: {
            enabled: 'tutorialRightButtonEnabled',
            disabled: 'tutorialRightButtonDisabled',
            over: 'tutorialRightButtonOver',
            pressed: 'tutorialRightButtonPressed'
        }
    },
    ticketSelectBar: {
        type: 'container',
        landscape: {
            scale: 0.9,
            x: 720,
            y: 541
        },
        portrait: {
            scale: 1,
            x: 405,
            y: 910
        },
        children: ['ticketSelectBarBG', 'ticketSelectCostValue', 'ticketSelectCostLabel', 'ticketCostDownButton', 'ticketCostUpButton', 'ticketCostIndicators']
    },
    ticketSelectBarBG: {
        type: 'sprite',
        anchor: 0.5,
        y: -10,
        landscape: {
            texture: 'landscape_pricePointSelectorBackground'
        },
        portrait: {
            texture: 'portrait_pricePointSelectorBackground'
        }
    },
    ticketCostDownButton: {
        type: 'button',
        portrait: {
            x: -312
        },
        landscape: {
            x: -250
        },
        textures: {
            enabled: 'minusButtonEnabled',
            disabled: 'minusButtonDisabled',
            over: 'minusButtonOver',
            pressed: 'minusButtonPressed'
        }
    },
    ticketCostUpButton: {
        type: 'button',
        portrait: {
            x: 312
        },
        landscape: {
            x: 250
        },
        textures: {
            enabled: 'plusButtonEnabled',
            disabled: 'plusButtonDisabled',
            over: 'plusButtonOver',
            pressed: 'plusButtonPressed'
        }
    },
    audioButtonContainer: {
        type: 'container',
        landscape: {
            x: 120,
            y: 675
        },
        portrait: {
            x: 71,
            y: 957
        }
    },
    endGameWinNoPlaque: {
        type: 'container',
        children: ['endGameWinNoPlaqueSpineContainer', 'endGameWinNoPlaqueValue'],
        portrait: {
            x: 410,
            y: 600
        },
        landscape: {
            x: 720,
            y: 410
        }
    },
    endGameNoPlaqueContainer: {
        type: 'container',
        children: ['endGameWinNoPlaque', 'endGameNoPlaqueContainerClick']
    },
    endGameNoPlaqueContainerClick: {
        type: 'pressable',
        children: ['endGameNoPlaqueContainerClickGraphic']
    },
    endGameNoPlaqueContainerClickGraphic: {
        type: 'rectangle',
        landscape: {
            width: 1440,
            height: 810,
            fill: 0xffffff
        },
        portrait: {
            width: 810,
            height: 1440,
            fill: 0xffffff
        }
    },
    endGameWinNoPlaqueSpineContainer: {
        type: 'container'
    },
    endGameWinNoPlaqueValue: {
        children: ['endGameWinNoPlaqueLabel'],
        type: 'text',
        style: 'winPlaqueValue',
        anchor: 0.5,
        align: 'center',
        maxWidth: 700
    },
    endGameWinNoPlaqueLabel: {
        type: 'text',
        style: 'winUpTo',
        string: 'message_win',
        anchor: 0.5,
        align: 'center',
        y: -150
    },
    moveToMoneyButton: {
        type: 'button',
        landscape: {
            x: 571,
            y: 50
        },
        portrait: {
            x: 255,
            y: 50
        },
        string: 'button_moveToMoney',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        maxWidth: 230
    },
    versionText: {
        type: 'text',
        style: 'versionText',
        x: 75,
        y: 120,
        alpha: 0.5
    },
    footerBG: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_footerBar'
        },
        portrait: {
            texture: 'portrait_footerBar',
            y: 6,
            scale: {
                y: 1.25
            }
        }
    },
    winPlaqueValue: {
        type: 'text',
        style: 'winPlaqueValue',
        y: 40,
        anchor: 0.5,
        maxWidth: 700
    },
    howToPlayText: {
        fill: 'fontColourTutorialBodyText',
        fontFamily: 'oswald',
        padding: 0,
        align: 'left'
    }
});