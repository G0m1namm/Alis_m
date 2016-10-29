Player = function(game) {


};

Player.prototype.createPlayer = function(game, x, y, key) {

    var key_bindings = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
    };


    var player = {
        sprite: game.add.sprite(x, y, key),
        speed: 300,
        keybinds: key_bindings
    };


    player.sprite.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(player.sprite);


    return player;


};

Player.prototype.updatePlayer = function(game, player) {

    player.sprite.body.velocity.x = 0;
    player.sprite.body.velocity.y = 0;



    if (player.keybinds.up.isDown) {
        player.sprite.body.velocity.y -= player.speed;
    }
    if (player.keybinds.left.isDown) {
        player.sprite.body.velocity.x -= player.speed;
    }
    if (player.keybinds.right.isDown) {
        player.sprite.body.velocity.x += player.speed;
    }
    if (player.keybinds.down.isDown) {
        player.sprite.body.velocity.y += player.speed;
    }

};

var p = new Player();
