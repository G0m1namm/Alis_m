Shader = function() {

    this.filter = [];
    this.FILTER_VIGNETTE = 0;
    this.FILTER_FILMGRAIN = 1;
    this.FILTER_SNOISE = 2;
};



Shader.prototype.setupFilters = function(game) {
    this.filter[this.FILTER_VIGNETTE] = game.add.filter('Vignette');
    this.filter[this.FILTER_VIGNETTE].size = 0.3;
    this.filter[this.FILTER_VIGNETTE].amount = 0.6;
    this.filter[this.FILTER_VIGNETTE].alpha = 1.0;

    //this.filter[this.FILTER_SNOISE] = game.add.filter('SNoise');


    this.filter[this.FILTER_FILMGRAIN] = game.add.filter('FilmGrain');
    this.filter[this.FILTER_FILMGRAIN].color = 0.3;
    this.filter[this.FILTER_FILMGRAIN].amount = 0.05;
    this.filter[this.FILTER_FILMGRAIN].luminance = 0.5;

    game.stage.filters = [this.filter[this.FILTER_FILMGRAIN], this.filter[this.FILTER_VIGNETTE]];

};


var sh = new Shader();
