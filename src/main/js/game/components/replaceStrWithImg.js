"use strict";

define(function(require) {
  var PIXI = require('com/pixijs/pixi');

  var displayList = require('skbJet/componentManchester/standardIW/displayList');

  var msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

  var orientation = require('skbJet/componentManchester/standardIW/orientation');

  var app = require('skbJet/componentManchester/standardIW/app');

  //var SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');

  require('com/gsap/TweenLite');

  require('com/gsap/easing/EasePack');

  var Tween = window.TweenLite;
  var replaceSet = {
    '[7]': 'tutorial7',
    '[77]': 'tutorial77',
    '[777]': 'tutorial777',
    '[RUBY]': 'tutorialBonus',
    '[WHEEL]': 'tutorialWheel',
    '[WHEELPRIZE]': 'tutorialPoint',
    '[WHEELARROW]': 'tutorialArrow',
    '[WHEELRESPIN]': 'tutorialRespin',
    '[WHEELX]': 'tutorialLoss',
    '[7sLOGO]': 'infoBarSymbol'
  };
  var startPosition = [
    [275, 340],
    [235, 270]
  ];
  var generatedSprites = [];

  function parseLines(array) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var spacing = options.linespacing || 0;

    if (options.index === 0) {
      generatedSprites.forEach(function(e) {
        e.parent.removeChild(e);
      });
      generatedSprites = [];
    }

    array.forEach(function(e, i) {
      if (e.text !== undefined) {
        e.text = e.oriText;
        e.y = startPosition[options.index][orientation.get() === orientation.LANDSCAPE ? 0 : 1] + spacing * i;
        replace(e.text, e, {
          spacing: options.spacing,
          padding: options.padding
        });
      }
    });
  }

  function replaceMidString(data) {
    var options = data.options || null;
    var container = data.container || null;
    var str = data.str || ' ';
    var replace = data.replace || ' ';
    var padding = options.padding || 0;
    var textureOffset = options.textureOffsetY || 0;
    var parsedString = str.split(replace);
    var preText = parsedString[0];
    var postText = parsedString[1];
    var leftString;
    var rightString;
    var sprite;
    var tempTexture;

    if (str.includes(replace)) {
      sprite = new PIXI.Sprite(PIXI.Texture.from(replaceSet[replace]));
      sprite.y -= textureOffset;
      container.addChild(sprite);
      leftString = new PIXI.Text(preText);
      rightString = new PIXI.Text(postText);
      leftString.anchor.y = 0.5;
      rightString.anchor.y = 0.5;
      leftString.y = 19;
      rightString.y = 19;
      leftString.style = container.style;
      rightString.style = container.style;
      container.addChild(leftString, rightString);
      container.text = ' ';
      sprite.x = leftString.width + padding;
      rightString.x = sprite.x + sprite.width;

      // Create a texture of this
      tempTexture = textureFromContainer(displayList.infoBarText, 'infoBarTexture');

      // Now remove everything, we're going to add a texture instead
      container.removeChild(sprite);
      container.removeChild(leftString, rightString);
    }

    // RUBY7-285 - COM- [sv][it][de][fr-CA]: Find Ruby 7s to win text is cut off and not scaled correctly
    // RD: Creating sprite from text container, able to scale via centre anchor point, rather than a locale-specific case
    if (container === displayList.infoBarText) {
      // Set up a new sprite, with anchor point 0.5
      let textSprite = new PIXI.Sprite(tempTexture);
      textSprite.anchor.set(0.5);
      displayList.infoBarText.addChild(textSprite);

      // Scale compared with the available width
      if (textSprite.width > displayList.infoBarBG.width) {
        // Scale the sprite
        const newScale = displayList.infoBarBG.width / textSprite.width;
        // Set scale
        textSprite.scale.set(newScale);
      }

      // Position the text sprite
      textSprite.x += displayList.infoBarBG.width >> 1;
      textSprite.y += 22;
    }


    /*if (SKBeInstant.config.locale === "pt_br") {
      displayList.infoBarText.x = 20;
      displayList.infoBarText.scale.set(0.95);
    }*/



    /*function evalWidth() {
      while (displayList.infoBar.x + rightString.x + rightString.width > 595) {
        if (displayList.infoBarText.x > 20) {
          displayList.infoBarText.x -= 1;
        }

        leftString.scale.x -= 0.001;
        leftString.scale.y -= 0.001;
        rightString.scale.x -= 0.001;
        rightString.scale.y -= 0.001;
        sprite.x = leftString.width + padding;
        rightString.x = sprite.x + sprite.width;
      }
    }*/

    //evalWidth();

    //displayList.infoBarText.x = displayList.infoBar.x + displayList.infoBar.width * 0.2;


  }

  function replace(str, pixiContainer) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var spacing = options.spacing || 0;

    if (str !== undefined) {
      Object.keys(replaceSet).forEach(function(e) {
        if (str.includes(e)) {
          var sprite = new PIXI.Sprite(PIXI.Texture.from(replaceSet[e]));
          pixiContainer.text = str.replace(e, '');
          sprite.anchor.set(0.5);
          generatedSprites.push(sprite);
          sprite.x = pixiContainer.x - spacing;
          sprite.y = pixiContainer.y;
          pixiContainer.parent.addChild(sprite);
        }
      });
    }
  }

  function run() {
    Tween.delayedCall(0, function() {
      parseLines(displayList.howToPlayPage1.children, {
        spacing: orientation.get() === orientation.LANDSCAPE ? 120 : 70,
        linespacing: orientation.get() === orientation.LANDSCAPE ? 80 : 120,
        index: 0
      });
      parseLines(displayList.howToPlayPage2.children, {
        spacing: orientation.get() === orientation.LANDSCAPE ? 120 : 80,
        linespacing: orientation.get() === orientation.LANDSCAPE ? 80 : 120,
        index: 1
      });
    });
  }

  function textureFromContainer(container, cacheId) {
    let texture = app.renderer.generateTexture(container);
    PIXI.Texture.addToCache(texture, cacheId);
    return texture;
  }

  msgBus.subscribe('game.util.howToPlay', function() {
    displayList.howToPlayPage1.children.forEach(function(e) {
      e.oriText = e.text;
    });
    displayList.howToPlayPage2.children.forEach(function(e) {
      e.oriText = e.text;
    });
    run();
  });
  msgBus.subscribe('game.util.replace', replaceMidString);
  msgBus.subscribe('GameSize.OrientationChange', function() {
    if (displayList.howToPlayPage2 !== undefined) {
      run();
    }
  });
});
//# sourceMappingURL=replaceStrWithImg.js.map