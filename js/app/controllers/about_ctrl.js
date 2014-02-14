define(['app'], function (app) {
    app.register.controller('AboutController', function ($scope) {
        $('nav li').removeClass('active');
        $('li.about').addClass('active');
    });
});