var routerServices = angular.module('routerServices', ['ngResource']);

routerServices.service('dataServiceLocal', function DataServiceLocal() {
	this.hentAlleFilm = function($scope, $http) {
		  var promise = $http.get('data/film.json'); 
		  promise.success(function(data, status, headers, config) {
			  	$scope.film.splice(0, $scope.film.length);
 				for(var i=0; i<data.length; i++)
				{
					$scope.film.push(data[i]);
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

routerServices.service('dataService', function DataService() {
	
	var filmServiceUrl = "http://9-dot-historiesamlingservice.appspot.com/film";
	
	this.hentAlleFilm = function($scope, $http) {
		
		  var promise = $http.get(filmServiceUrl);
		  promise.success(function(data, status, headers, config) {
			  $scope.film.splice(0, $scope.film.length);
 				for(var i=0; i<data.length; i++)
				{
					$scope.film.push({
				    	  premiereaar: data[i].premiereAar,
				    	  titel: decodeURIComponent(data[i].titel),
				    	  trailer: data[i].trailer,
				    	  instruktoer: decodeURIComponent(data[i].instruktoer),
				    	  id: data[i].id
    			      });
				}
	  	}).error(function(data, status, headers, config) {
	    		alert("Ajax fejl ifm. hentAlleFilm..."+status)
	  	});
	};
	
	this.opretFilm = function($scope, $http) {
		
		var instruktoer = encodeURIComponent($scope.instruktoerModel);
		var titel = encodeURIComponent($scope.filmTitelModel);
		
        var promise = $http.post(filmServiceUrl, { 
            "instruktoer": instruktoer,
            "titel": titel,
            "premiereaar": $scope.premiereAarModel,
            "trailer": $scope.trailerModel
          });
        
        promise.success(function(data, status, headers, config) {
    		$scope.pwCudStatus = 'Filmen er oprettet';
        });
        promise.error(function(data, status, headers, config) {
        	$scope.pwCudStatus = "AJAX fejl ifm. opretFilm..."+status;
        });
	};
	
    var boegerServiceUrl = "http://9-dot-historiesamlingservice.appspot.com/boeger";

    this.hentAlleBoeger = function($scope, $http) {
		  var promise = $http.get(boegerServiceUrl); 
		  promise.success(function(data, status, headers, config) {
			  	$scope.boeger.splice(0, $scope.boeger.length);
 				for(var i=0; i<data.length; i++)
				{
					$scope.boeger.push({
				    	  udgivelsesaar: data[i].udgivelsesAar,
				    	  isbn: data[i].isbn,
				    	  titel: decodeURIComponent(data[i].titel),
				    	  forfatter: decodeURIComponent(data[i].forfatter),
				    	  id: data[i].id
                                        });
				}
	  	}).error(function(data, status, headers, config) {
	    		alert("Fejl "+status);
	  	});
	};			


});

routerServices.service('dataServiceRest', function DataServiceRest() {
	
	var filmServiceUrl = "http://9-dot-historiesamlingservice.appspot.com/film";
	

    
});
