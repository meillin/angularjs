define(['angularAMD', 'angular-route', 'angular-animate'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute', 'ngAnimate']);
    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/movies",
				angularAMD.route({
					templateUrl: 'views/movies.html',
					controller: 'MovieController'
            })).
            when("/shop",
					angularAMD.route({
					templateUrl: 'views/shop.html',
					controller: 'ShopController'
			})).
			when("/about",
					angularAMD.route({
					templateUrl: 'views/about.html',
					controller: 'AboutController'
			})).
			otherwise({redirectTo: '/movies'});
    }]);

     // Bootstrap Angular when DOM is ready
    angularAMD.bootstrap(app);

    return app;
});