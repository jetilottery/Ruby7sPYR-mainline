define(function (require) {
    const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
    const numberState = require('game/state/numbers');
    const winUpTo = require('game/components/winUpTo');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

    function gameReset() {
        numberState.reset();
        winUpTo.reset();

        msgBus.publish('game.bonus.reset');
        msgBus.publish('game.wheel.reset');
        msgBus.publish('game.meter.bonusReset');
        msgBus.publish('game.gameArea.reset');
        msgBus.publish('game.bonusParticles.reset');
        msgBus.publish('game.endGame.reset');

        // Fade out the win/lose terminator in case it is still playing
        if (audio.isPlaying('winTerminator')) {
            audio.fadeOut('winTerminator', 1);
        }
        if (audio.isPlaying('loseTerminator')) {
            audio.fadeOut('loseTerminator', 1);
        }

        gameFlow.next('BUY_SCREEN');
    }

    gameFlow.handle(gameReset, 'GAME_RESET');
});
