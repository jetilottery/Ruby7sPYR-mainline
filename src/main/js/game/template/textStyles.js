"use strict";

define({
    plaqueMessageSmall: {},
    buttonText: {},
    winningNumbersTitle: {
        fontFamily: 'oswald',
        fontWeight: 'bold',
        fontSize: 36,
        fill: 'fontColourLuckyNumberTitle'
    },
    playerNumbersTitle: {
        fontFamily: 'oswald',
        fontWeight: 'bold',
        fontSize: 36,
        fill: 'fontColourYourNumberTitle'
    },
    prizeValueNoWin: {
        fontFamily: 'oswald',
        fontSize: 28,
        fontWeight: 'bold',
        fill: 'fontColourCashValueNoWin'
    },
    prizeValueWin: {
        fontFamily: 'oswald',
        fontSize: 28,
        fontWeight: 'bold',
        fill: 'fontColourCashValueWin'
    },
    winUpTo: {
        fontSize: 80,
        fontFamily: 'WendyOne',
        fontWeight: "bold",
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    infoBar: {
        fontSize: 30,
        fontFamily: 'WendyOne',
        fontWeight: "bold",
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5,
        align: 'center',

    },
    winUpToTitle: {
        fontSize: 55,
        fontFamily: 'WendyOne',
        fontWeight: "bold",
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    segment: {
        fontFamily: 'oswald',
        fontSize: 40,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    bonusLabel: {
        fontFamily: 'WendyOne',
        fontSize: 44,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAlpha: 0.5,
        dropShadowAngle: 1.7,
        dropShadowBlur: 11,
        dropShadowDistance: 3,
        fill: ["#97d3e6", "white", "#74919e", "#a7d5e2", "#c7e8f1"],
        fillGradientStops: [0, 0.5, 0.6, 0.7],
        strokeThickness: 5
    },
    bonusLabelGold: {
        fontFamily: 'WendyOne',
        fontSize: 44,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    bonusWin: {
        fontFamily: 'oswald',
        fontSize: 44,
        fontWeight: 'bold',
        fill: 'fontColourBonusWin'
    },
    bonusNoWin: {
        fontFamily: 'oswald',
        fontSize: 44,
        fontWeight: 'bold',
        fill: 'fontColourBonusNoWin'
    },
    losePlaqueBody: {
        fontFamily: 'WendyOne',
        fontSize: 80,
        //fontWeight: 'bold',
        dropShadow: true,
        dropShadowAlpha: 0.5,
        dropShadowAngle: 1.7,
        dropShadowBlur: 11,
        //dropShadowDistance: 3,
        align: 'center',
        fill: ["#97d3e6", "white", "#74919e", "#a7d5e2", "#c7e8f1"],
        fillGradientStops: [0, 0.5, 0.6, 0.7],
        miterLimit: 40,
        padding: 41,
        //strokeThickness: 5
    },
    winPlaqueBody: {
        fontFamily: 'WendyOne',
        fontSize: 50,
        //fontWeight: 'bold',
        dropShadow: true,
        dropShadowAlpha: 0.5,
        dropShadowAngle: 1.7,
        dropShadowBlur: 11,
        dropShadowDistance: 3,
        align: 'center',
        fill: ["#97d3e6", "white", "#74919e", "#a7d5e2", "#c7e8f1"],
        fillGradientStops: [0, 0.5, 0.6, 0.7],
        miterLimit: 40,
        padding: 41,
    },
    winPlaqueValue: {
        fontFamily: 'WendyOne',
        fontSize: 140,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    bonusWinTitle: {
        fontFamily: 'WendyOne',
        fontSize: 50,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    bonusWinValue: {
        fontFamily: 'WendyOne',
        fontSize: 60,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAngle: 1,
        dropShadowBlur: 33,
        dropShadowDistance: 0,
        fill: ["#fff7c6", "#ffe16a", "#fefac0", "#bf9900", "#e4b832"],
        fillGradientStops: [0.3, 0.5, 0.5, 0.5, 0.6],
        lineJoin: "round",
        miterLimit: 28,
        padding: 41,
        stroke: "#603c06",
        strokeThickness: 5
    },
    bonusInfo: {
        fontFamily: 'WendyOne',
        fontSize: 25,
        fontWeight: 'bold',
        dropShadow: true,
        dropShadowAlpha: 0.5,
        dropShadowAngle: 1.7,
        dropShadowBlur: 11,
        dropShadowDistance: 3,
        align: 'center',
        fill: ["#97d3e6", "#c7e8f1"],
        fillGradientStops: [0, 0.5, 0.6, 0.7],
        strokeThickness: 5
    },
    mainButtonEnabled: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourMainButtonEnabled',
        padding: 10,
        maxWidth: 230
    },
    mainButtonDisabled: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourMainButtonDisabled',
        padding: 10,
        maxWidth: 230
    },
    mainButtonOver: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourMainButtonOver',
        padding: 10,
        maxWidth: 230
    },
    mainButtonPressed: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourMainButtonPressed',
        padding: 10,
        maxWidth: 230
    },
    tutorialOKButtonPressed: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: 'fontColourTutorialOKButtonPressed',
        padding: 10
    },
    ticketSelectCostValue: {
        fontFamily: 'oswald',
        fontSize: 45,
        fill: 'fontColourPricePointValue',
        padding: 10,
    },
    ticketSelectCostLabel: {
        fontFamily: 'oswald',
        fontSize: 25,
        fill: 'fontColourPricePointTitle',
        padding: 10,
    },
});
//# sourceMappingURL=textStyles.js.map