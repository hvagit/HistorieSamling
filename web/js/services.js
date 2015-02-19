var routerServices = angular.module('routerServices', []);

routerServices.service('dataServiceLocal', function DataServiceLocal() {
	this.hentAlleFilm = function($scope, $http) {
		  var promise = $http.get('data/films.json'); 
		  promise.success(function(data, status, headers, config) {
			  	$scope.films.splice(0, $scope.films.length);
 				for(var i=0; i<data.length; i++)
				{
					$scope.films.push(data[i]);
				}
	  	}).error(function(data, status, headers, config) {
	    		alert("Fejl "+status);
	  	});
	};			

	this.hentAlleBoeger = function($scope, $http) {
		  var promise = $http.get('data/boeger.json'); 
		  promise.success(function(data, status, headers, config) {
			  	$scope.boeger.splice(0, $scope.boeger.length);
 				for(var i=0; i<data.length; i++)
				{
					$scope.boeger.push(data[i]);
				}
	  	}).error(function(data, status, headers, config) {
	    		alert("Fejl "+status);
	  	});
	};			
});

