BasicGame.Preloader = function(game) {

    this.background = null;
    this.preloadBar = null;

    this.ready = false;

};

BasicGame.Preloader.prototype = {

    preload: function() {

        //	These are the assets we loaded in Boot.js
        //	A nice sparkly background and a loading progress bar

        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);


        this.time.advancedTiming = true;

        //	This sets the preloadBar sprite as a loader sprite.
        //	What that does is automatically crop the sprite from 0 to full-width
        //	as the files below are loaded in.

        this.load.setPreloadSprite(this.preloadBar);

        //L0AD



        this.load.image('tileset', 'assets/art/tileset.png');
        this.load.image('col', 'assets/art/col.png');
        this.load.image('player', 'assets/art/player.png');

        this.load.tilemap('intro', 'assets/levels/intro.json', null, Phaser.Tilemap.TILED_JSON);


        //Shaders
        this.load.script('filter-vignette', 'assets/shaders/Vignette.js');
        //game.load.script('filter-snoise', 'assets/shaders/SNoise.js');
        this.load.script('filter-filmgrain', 'assets/shaders/FilmGrain.js');


    },

    create: function() {

        this.state.start('Game');




    }

};