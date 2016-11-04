BasicGame.MainMenu = function(game) {
    this.game = game;

    this.version_number = '0.0.5';
};

var title;

var buttons;


var menuTheme = new Howl({
    src: ['assets/sound/titleTheme.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,

});

var enter;

var counter;
var selector_bracket_left;

var selector_bracket_right;

var button_selected;

var buttons_done;
BasicGame.MainMenu.prototype = {

    create: function() {
        counter = 0;
        var bg = this.game.add.sprite(0, 0, 'bg');

        var emitter = this.game.add.emitter(this.game.world.centerX, 0, 100, 100);
        emitter.width = this.game.world.width;
        emitter.makeParticles('particle');

        emitter.minParticleSpeed.setTo(-300, 30);
        emitter.maxParticleSpeed.setTo(300, 100);
        emitter.minParticleScale = 0.1;
        emitter.maxParticleScale = 0.5;
        emitter.gravity = 1250;

        //  This will emit a quantity of 5 particles every 500ms. Each particle will live for 2000ms.
        //  The -1 means "run forever"
        emitter.flow(2000, 500, 5, -1);



        buttons_done = false;
        title = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'title');
        title.anchor.setTo(0.5, 0.5);
        title.alpha = 0;

        this.game.add.tween(title).to({ alpha: 1 }, 1700, "Quart.easeOut", true);

        var titleTween = this.game.add.tween(title).to({ x: this.game.world.centerX, y: this.game.world.centerY - 200 }, 1700, "Quart.easeOut", true);

        titleTween.onComplete.add(function() {
            this.initButtons();
            buttons_done = true;
        }, this);

          var bottomText = this.game.add.bitmapText(32, this.game.world.height - 64, 'font', 'version ' + this.version_number, 8);
        //bottomText.replaceRGB(0, 0, 0, 255, 0, 250, 40, 255);





    },


    initButtons: function() {


        var buttonText = ['OPTIONS', 'PLAY', 'CREDITS'];
        buttons = [];

        button_selected = 1;

        var left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        var right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);


        for (var i = 0; i < buttonText.length; i++) {
            var text = this.game.add.bitmapText(title.x, title.y, 'font', buttonText[i], 16);
            text.anchor.setTo(0.5, 0.5);
            text.inputEnabled = true;
            text.alpha = 0;
            this.game.add.tween(text).to({ x: 300 + this.game.world.centerX - i * 300, y: this.game.world.centerY }, 1700, "Quart.easeOut", true);
            this.game.add.tween(text).to({ alpha: 1 }, 2000, "Quart.easeOut", true);

            buttons.push(text);
        }

        buttons[1].events.onInputDown.add(function() {
            this.game.state.start("Game");
            menuTheme.stop();
        }, this);

        buttons[0].events.onInputOver.add(function() {
            button_selected = 0;
        }, this);


        buttons[1].events.onInputOver.add(function() {
            button_selected = 1;
        }, this);

        buttons[2].events.onInputOver.add(function() {
            button_selected = 2;
        }, this);


        selector_bracket_left = this.game.add.bitmapText(0, 0, 'font', '[', 16);
        selector_bracket_right = this.game.add.bitmapText(0, 0, 'font', ']', 16);
        left.onDown.add(function() {
            button_selected += 1;
        }, this);



        right.onDown.add(function() {
            button_selected -= 1;

        }, this);










    },

    update: function() {


        if (buttons_done) {
            if (button_selected < 0) {
                button_selected = 2;
            } else if (button_selected > 2) {
                button_selected = 0;
            }
            counter++;
            selector_bracket_left.x = buttons[button_selected].x - buttons[button_selected].width / 2 - Math.cos(counter / 25) * 10 - 20;
            selector_bracket_left.y = buttons[button_selected].y - buttons[button_selected].height / 2;
            selector_bracket_right.x = buttons[button_selected].x + buttons[button_selected].width / 2 + Math.cos(counter / 25) * 10 + 5;
            selector_bracket_right.y = buttons[button_selected].y - buttons[button_selected].height / 2;


            if (button_selected == 0 && enter.isDown){
            	console.log('options');
            }else if(button_selected == 1 && enter.isDown){
            	this.game.state.start('Game');
            }else if(button_selected == 2 && enter.isDown){
            	console.log('credits');
            }



        }


    }

};
