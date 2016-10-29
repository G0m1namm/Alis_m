Scene = function() {
    this.ground_tileset = 'tileset';
    this.collidables_tileset = 'col';
    this.sprite;
    this.filter;
};
var player;
var col_layer;
Scene.prototype.createScene = function(game) {
    game.stage.backgroundColor = '#50f5c4';
    var intro = m.loadMap(game, 'intro');
    m.createLayer(game, intro, 'foreground', this.ground_tileset, true);
    m.createLayer(game, intro, 'background', this.ground_tileset, true);
    col_layer = m.createLayer(game, intro, 'col_layer', this.collidables_tileset, true);
    player = p.createPlayer(game, game.world.centerX, game.world.centerY, 'player');
    game.camera.follow(player.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.09, 0.09);
    sh.setupFilters(game);
};
Scene.prototype.updateScene = function(game) {
    p.updatePlayer(game, player);
    m.checkCols(game, col_layer, player.sprite);
};
var s = new Scene();
