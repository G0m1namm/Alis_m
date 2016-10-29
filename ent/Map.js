Map = function() {

};
Map.prototype.loadMap = function(game, tilemap) {
    var map = {
        map: game.add.tilemap(tilemap),
        tileset: 0,
    };
    return map;
};
Map.prototype.createLayer = function(game, map, layerid, tileset, resize) {
    var layer = map.map.createLayer(layerid);
    map.tileset = map.map.addTilesetImage(tileset, tileset);
    if (resize) {
        layer.resizeWorld();
    }
    return layer;
};

Map.prototype.checkCols = function(game, layer, player) {
    game.physics.arcade.collide(p, layer);
};
var m = new Map();
