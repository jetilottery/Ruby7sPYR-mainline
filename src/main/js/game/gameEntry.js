define(function(require) {
  require('polyfill');
  const app = require('skbJet/componentManchester/standardIW/app');
  const layout = require('skbJet/componentManchester/standardIW/layout');
  const config = require('skbJet/componentManchester/standardIW/gameConfig');
  const audio = require('skbJet/componentManchester/standardIW/audio');
  const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
  const gameSize = require('skbJet/componentManchester/standardIW/gameSize');
  const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
  const documents = require('skbJet/componentManchester/standardIW/documents');
  const scenarioData = require('skbJet/componentManchester/standardIW/scenarioData');
  const loadController = require('skbJet/componentManchester/standardIW/loadController');
  const spineSubLoader = require('skbJet/componentManchester/spineLoader/SpineSubLoader');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

  const SKBeInstant = require("skbJet/component/SKBeInstant/SKBeInstant");
  const prizestructureTransform = require("game/prizestructureTransform");
  const prizetableTransform = require('game/prizetableTransform');
  const scenarioTransform = require('game/scenarioTransform');

  const templateLayout = require('game/template/layout');
  const gameLayout = require('game/custom/layout');
  const templateConfig = require('game/template/config');
  const gameConfig = require('game/custom/config');
  const templateAudioMap = require('game/template/audioMap');
  const gameAudioMap = require('game/custom/audioMap');
  const templateTextStyles = require('game/template/textStyles');
  const gameTextStyles = require('game/custom/textStyles');
  const dimensions = require('game/template/dimensions');

  // Require StandardIW component templates
  let buttonBar = require('skbJet/componentManchester/standardIW/ui/buttonBar/template');
  let autoPlayButton = require('skbJet/componentManchester/standardIW/ui/autoPlayButton/template');
  let resultPlaques = require('skbJet/componentManchester/standardIW/ui/resultPlaques/template');
  let howToPlay = require('skbJet/componentManchester/standardIW/ui/howToPlay/template');
  let errorPlaque = require('skbJet/componentManchester/standardIW/ui/errorPlaque/template');
  let ticketSelectBar = require('skbJet/componentManchester/standardIW/ui/ticketSelectBar/template');
  let footer = require('skbJet/componentManchester/standardIW/ui/footer/template');
  let networkActivity = require('skbJet/componentManchester/standardIW/ui/networkActivity/template');

  let gamePlay = require('game/components/gamePlay');
  let background = require('game/components/backgroundEffect');
  let animationView = require('game/components/animation/animationView');
  let totalWinMeter = require('game/components/totalWinMeter');
  // let logoSparkles = require('game/components/logoSparkles');
  let bonusParticles = require('game/components/bonusParticles');
  const gameResize = require('game/components/resize');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');

  // Require all game specific components that need initializing
  require('game/components/winUpTo');
  require('game/components/replaceStrWithImg');
  require('game/components/endGameManager');
  // Require game side state handlers.
  require('game/ticketAcquired');
  require('game/startReveal');
  require('game/endReveal');
  require('game/resultScreen');
  require('game/gameReset');
  require('game/error');


  // Register template configs and game overrides
  layout.register(templateLayout, gameLayout);
  audio.register(templateAudioMap, gameAudioMap);
  config.register(templateConfig, gameConfig);
  textStyles.register(templateTextStyles, gameTextStyles);
  loadController.registerSubLoader('spine', new spineSubLoader());

  // Set game size for portrait and landscape
  gameSize.set(dimensions);

  function gameInit() {
    // Register a transform function that can be used to turn the prizetable data into structured
    // data representing the prizetables in the paytable document
    if (SKBeInstant.isWLA()) {
      documents.registerPrizestructureTransform(prizestructureTransform);
    } else {
      documents.registerPrizetableTransform(prizetableTransform);
    }
    // Register a transform function that can be used to turn the scenario string into useable data
    scenarioData.registerTransform(scenarioTransform);



    // Init StandardIW UI templates
    howToPlay = howToPlay();
    resultPlaques = resultPlaques();
    errorPlaque = errorPlaque();
    buttonBar = buttonBar();
    autoPlayButton = autoPlayButton();
    ticketSelectBar = ticketSelectBar();
    footer = footer();
    networkActivity = networkActivity();

    // Inititialize all game components

    gameResize.preload(app, completInitAfterPreload);

    function completInitAfterPreload() {
      app.stage.addChild(
        layout.container,
        resultPlaques,
        buttonBar,
        autoPlayButton,
        ticketSelectBar,
        howToPlay,
        footer,
        errorPlaque,
        networkActivity
      );

      animationView.init();
      // logoSparkles.init();
      background.init();
      totalWinMeter.init();
      gamePlay.init();
      bonusParticles.init();
      gameResize.text();
      // Once everything is initialized continue to next state
      gameFlow.next();

      msgBus.publish('game.util.howToPlay');
      msgBus.publish('game.endGame.init');

      // RUBY7-254 - Ruby 7's_IXF_Brazil- Price Point in TRY display Issue
      if (config.overrideTicketSelectCostValueMaxWidth) {
        displayList.ticketSelectCostValue.maxWidth = config.overrideTicketSelectCostValueMaxWidthValue;
      }

      if (config.overrideMaxButtonWidth) {
        displayList.playAgainButton.label.maxWidth = config.overrideButtonWidthValue;
        displayList.tryAgainButton.label.maxWidth = config.overrideButtonWidthValue;
        displayList.moveToMoneyButton.label.maxWidth = config.overrideButtonWidthValue;

        //overRide reveall all text width                
        displayList.autoPlayStartButton.label.maxWidth = config.overrideButtonWidthValue;
      }
    }
    // Add everything to the stage
  }

  gameFlow.handle(gameInit, 'GAME_INIT');
});