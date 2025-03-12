define(require => {

    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');
    const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');

    require('com/gsap/TimelineMax');
    let Timeline = window.TimelineMax;

    require('com/gsap/TweenMax');
    const Tween = window.TweenMax;

    let baseGameContainer;
    let bonusContainer;

    let gameMode = 'baseGame';

    let transitionTimeline;

    let beforeBonusInfoString;
    let bonusInfoString;

    let gameModeSwitched = false;

    function init() {
        baseGameContainer = displayList.symbolsBackground;
        bonusContainer = displayList.bonusContainer;

        baseGameContainer.visible = true;
        bonusContainer.visible = false;

        beforeBonusInfoString = resources.i18n.Game.bonusInfo;
        bonusInfoString = resources.i18n.Game.bonusInfo2;

        transitionTimeline = new Timeline({
            paused: true,
            onComplete: () => {
                msgBus.publish('game.transitionComplete');
            }
        });
        transitionTimeline.to(displayList.winUpToLabel,0.1,{
            alpha:0
        });
        transitionTimeline.to(displayList.winUpTo, 0.1, {
            alpha: 0
        }, 0);
        transitionTimeline.to(baseGameContainer, 0.1, {
            alpha: 0,
        }, 0);
        transitionTimeline.to(bonusContainer, 0.1, {
           alpha:1
        }, 0);

        displayList.transitionContainer.visible = false;

        msgBus.publish('animation.setEvents', {
            index: 'transition',
            event: {
                'swap': () => {
                    switch (gameMode) {
                        case 'baseGame': {
                            if(baseGameContainer.visible && !gameModeSwitched) {
                                console.log('animation.setEvents baseGame');
                                bonusContainer.visible = true;
                                baseGameContainer.visible = false;
                                transitionTimeline.play();
                                gameMode = 'bonusGame';
                                displayList.bonusInfoText.text = bonusInfoString;
                                gameModeSwitched = true;
                            }

                            break;
                        }
                        case 'bonusGame': {
                            if(bonusContainer.visible && !gameModeSwitched) {
                                console.log('animation.setEvents bonusGame');
                                bonusContainer.visible = false;
                                baseGameContainer.visible = true;
                                transitionTimeline.reverse();
                                gameMode = 'baseGame';
                                displayList.bonusInfoText.text = beforeBonusInfoString;
                                gameModeSwitched = true;
                            }

                            break;
                        }
                    }
                },
                'complete':()=>{
                    msgBus.publish('UI.updateButtons', {
                        help: {enabled: true},
                    });

                    msgBus.publish('animation.clearTrack', {
                        index: 'transition',
                        all:true
                    });
                }
            }
        });
    }

    function switchGameMode() {

        gameModeSwitched = false;

        setOrientation();

        displayList.transitionContainer.visible = true;

        audio.play('transition');

        msgBus.publish('game.gamePlay.updateDelay');

        msgBus.publish('animation.add', {
            index: 'transition',
            anim: orientation.get() === orientation.LANDSCAPE ? 'bonusTransition_land' : 'bonusTransition_port',
            delay: 0,
            loop: 0
        });

        msgBus.publish('game.background.transformToGreyScale');

        Tween.delayedCall(0.5,()=>{
            audio.play('bonusMusic', 1, true);

            msgBus.publish('animation.play', {
                index: 'bonusSpineController',
                anim: 'bonusMeter_Static',
                delay: 0,
                loop: 0
            });
        });
    }

    msgBus.subscribe('game.transitionToNext', ()=>{
        Tween.delayedCall(gameConfig.gameEndDelay,switchGameMode);
    });

    function setOrientation() {
        if(displayList.transitionContainer.children.length !== 0) {
            displayList.transitionContainer.children[0].pivot.x = (orientation.get() === orientation.LANDSCAPE ? -720 : -360);
            displayList.transitionContainer.children[0].pivot.y = (orientation.get() === orientation.LANDSCAPE ? -405 : -605);
        }
    }

    msgBus.subscribe('GameSize.OrientationChange',()=>{
        setOrientation();

        let ori = orientation.get() === orientation.LANDSCAPE ? 'land' : 'port';

        if(displayList.transitionContainer.children[0] !== undefined && displayList.transitionContainer.children[0].state.tracks[0] !== undefined) {
            if(displayList.transitionContainer.children[0].state.tracks[0].animation.name !== 'bonusTransition_'+ori) {
                let time = displayList.transitionContainer.children[0].state.tracks[0].time;
                displayList.transitionContainer.children[0].state.setAnimation(0,"bonusTransition_"+ori,false);
                displayList.transitionContainer.children[0].state.tracks[0].time = time;
            }
        }
    });

    return {
        init
    };
});