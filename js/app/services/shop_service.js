// dataServices
// define(['app','angular-resource'], function (app) {
define(['app'], function (app) {
    // app.register.factory('Pictures', ['$http', '$q', '$log', '$resource', function ($http, $q, $log, $resource) {
    app.register.service('dvdItems', function () {

        var dvds = [
            {
                name: 'Batman',
                price: 299,
                active: true
            },{
                name: 'Spiderman',
                price: 199,
                active: false
            },{
                name: 'Superman',
                price: 99,
                active: false
            },{
                name: 'Ironman',
                price: 9,
                active: false
            }
        ];

        return dvds;

    });

});