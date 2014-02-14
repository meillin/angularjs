require.config({

    baseUrl: "js",
    
	// alias libraries paths
    paths: {
        'angular': 'lib/angular/angular',
        'angular-route': 'lib/angular/angular-route',
        'async': 'lib/requirejs/async',
        'angularAMD': 'lib/requirejs/angularAMD',
        'angular-animate': 'lib/angular/angular-animate.min',
        'ngload': 'lib/requirejs/ngload',

        'MovieController': 'app/controllers/movie_ctrl',
        'ShopController': 'app/controllers/shop_ctrl',
        'AboutController': 'app/controllers/about_ctrl',

        'ShopService': 'app/services/shop_service',
        'MovieService': 'app/services/movie_service'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-animate': ['angular']
    },

    // kick start application
    deps: ['app']
});