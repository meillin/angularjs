//Load nesscery files first
define(['app', 'ShopService'], function(app){

	app.register.controller('ShopController', ['$scope', 'dvdItems', function($scope, dvdItems) {
		
		$scope.dvds = dvdItems;
		//Inicialize page
		$scope.init = function() {
			$('nav li').removeClass('active');
			$('li.shop').addClass('active');
		};
	
		$scope.toggleActive = function(d){
			d.active = !d.active;
		};

		$scope.total = function() {
			var total = 0;
			angular.forEach($scope.dvds, function(d) {
				if(d.active){
					total += d.price;
				}
			});
			return total;
		};
	}]);
});