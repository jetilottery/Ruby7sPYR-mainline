define(require => {
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');

    require('com/gsap/easing/EasePack');
    require('com/gsap/TimelineMax');
    let Timeline = window.TimelineMax;

    require('com/gsap/TweenLite');
    const Tween = window.TweenLite;

    let endgameArea;
    let endGameText;
    let winTextTimeline;
    let endgameAreaTween;

    function init() {
        endgameArea = displayList.endGameWinNoPlaque;
        endGameText = displayList.endGameWinNoPlaqueValue;

        endgameArea.renderable = false;
        // endgameArea.y = orientation.get() === orientation.LANDSCAPE ? 410 : 600;
        winTextTimeline = new Timeline({
            paused: true,
            onComplete: () => {
                displayList.endGameNoPlaqueContainerClick.interactive = true;
            }
        });

        displayList.endGameNoPlaqueContainerClick.interactive = false;
        displayList.endGameNoPlaqueContainerClick.renderable = false;

        displayList.endGameNoPlaqueContainerClick.on('press', () => {
            endgameArea.renderable = false;
            displayList.endGameNoPlaqueContainerClick.interactive = false;
        });

        endGameText.alpha = 0;
        winTextTimeline.to(endGameText, 0.5, {
            alpha: 1
        }, 0);


        msgBus.publish('animation.play', {
            index: 'winPlaqueAnim',
            anim: orientation.get() === orientation.LANDSCAPE ? 'winAnimation_land' : 'winAnimation_port',
            delay: 0,
            loop: -1
        });

        msgBus.publish('animation.play', {
            index: 'logo',
            anim: 'ruby7s_logo_loop',
            delay: 0,
            loop: -1
        });

        msgBus.publish('animation.setEvents', {
            index: 'endGameNoPlaque',
            event: {
                'winText': () => {
                    winTextTimeline.play();
                },
            }
        });
    }

    function endGame() {
        if (meterData.win > 0) {
            endgameArea.rendable = true;

            endgameArea.renderable = true;
            endgameAreaTween = Tween.fromTo(endgameArea, 0.5, {
                y: orientation.get() === orientation.LANDSCAPE ? 610 : 800
            },{
                y: orientation.get() === orientation.LANDSCAPE ? 410 : 600
            });

            let endGameWinNoPlaqueValue = meterData.win;
            endGameText.text = SKBeInstant.formatCurrency(endGameWinNoPlaqueValue).formattedAmount;

            msgBus.publish('animation.play', {
                index: 'endGameNoPlaque',
                anim: 'winAnimation_noPlaque_IN',
            });
            msgBus.publish('animation.add', {
                index: 'endGameNoPlaque',
                anim: 'winAnimation_noPlaque_loop',
                delay: 0,
                loop: 0
            });
            msgBus.publish('animation.add', {
                index: 'endGameNoPlaque',
                anim: 'winAnimation_noPlaque_OUT',
                delay: 0,
                loop: 0
            });
        }
    }

    function updateEndPosition() {
        if(endgameAreaTween !== undefined) {
            var time = endgameAreaTween.time();
            endgameArea.y = orientation.get() === orientation.LANDSCAPE ? 610 : 800;
            endgameAreaTween.vars.y = orientation.get() === orientation.LANDSCAPE ? 410 : 600;
            endgameAreaTween.seek(0).invalidate().seek(time);
        }
    }

    function reset() {
        endGameText.alpha = 0;
        endgameArea.rendable = false;

        winTextTimeline.pause(0);

        msgBus.publish('animation.clearTrack', {
            index: 'endGameNoPlaque',
            all: true
        });
    }

    //
    // function showWinPlaque() {
    //     tween.to()
    // }

    msgBus.subscribe('game.endGame.init', init);
    msgBus.subscribe('game.endGame.run', endGame);
    msgBus.subscribe('game.endGame.reset', reset);

    msgBus.subscribe('GameSize.OrientationChange', () => {
        updateEndPosition();
    });

});