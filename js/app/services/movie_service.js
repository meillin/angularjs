define(['app'], function (app) {
    app.register.factory('Movies', ['$http', '$q', '$log', function ($http, $q, $log) {
      
        var apiKey = "1c60bfaa49ab8a58b42043418a9cc049";
        var apiUrl = 'http://api.trakt.tv/movies/trending.json/' + apiKey + '?&callback=JSON_CALLBACK';
        //var apiUrl = 'http://meitv.dev/data/data.json?callback=JSON_CALLBACK';
        return {
            query: function () {
                var d = $q.defer();
                //User jsonp instead get when fetching remove data
                $http.jsonp(apiUrl).success(function (data) {
                    d.resolve(data);
                }).error(function (data, status, headers, config) {
                    $log.error("Error: ", headers);
                    d.reject(data);
                });
                return d.promise;
            }
        };

    }]);
});

/**
 * The $http service is a core Angular service that facilitates communication with the remote HTTP servers 
 * via the browser's XMLHttpRequest object or via JSONP.
 *
 *The Deferred API
A new instance of deferred is constructed by calling $q.defer().

The purpose of the deferred object is to expose the associated Promise instance as well as APIs that can be used for signaling the successful or 
unsuccessful completion, as well as the status of the task.

Methods

resolve(value) – resolves the derived promise with the value. If the value is a rejection constructed via $q.reject, the promise will be rejected instead.
reject(reason) – rejects the derived promise with the reason. This is equivalent to resolving it with a rejection constructed via $q.reject.
notify(value) - provides updates on the status of the promise's execution. This may be called multiple times before the promise is either resolved
or rejected.
Properties

promise – {Promise} – promise object associated with this deferred.
 * 
 */