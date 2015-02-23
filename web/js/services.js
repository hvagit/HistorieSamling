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

	this.opretBog = function($scope, $http) {
		
		var bogtitel = encodeURIComponent($scope.titelModel);
		var forfatter = encodeURIComponent($scope.forfatterModel);
		
        var promise = $http.post(boegerServiceUrl, { 
            "udgivelsesAar": $scope.udgivelsesaarModel,
            "dk5Vaerdi": $scope.dk5VaerdiModel,
            "forfatter": forfatter,
            "titel": bogtitel,
            "isbn": $scope.isbnModel
          });
        
        promise.success(function(data, status, headers, config) {
    		$scope.pwCudStatus = 'Bogen er oprettet';
        });
        promise.error(function(data, status, headers, config) {
        	$scope.pwCudStatus = "AJAX fejl ifm. opretBog..."+status;
        });
	};

});

routerServices.service('dataServiceRest', function DataServiceRest($resource) {
	
    var Film = $resource('http://9-dot-historiesamlingservice.appspot.com/film:id');

    this.opretFilm = function($scope) {
        var film1 = new Film();
        film1.instruktoer = encodeURIComponent($scope.instruktoerModel);
        film1.titel = encodeURIComponent($scope.filmTitelModel);
        film1.premiereAar = $scope.premiereAarModel;
        film1.trailer = $scope.trailerModel;
        film1.$save();   
    };

    // Ikke implementeret færdig.
    this.opdaterFilm = function($scope) {
        var film2 = Film.get({id: 4809889046069248});
        film2.instruktoer = encodeURIComponent($scope.instruktoerModel);
        film2.titel = encodeURIComponent($scope.filmTitelModel);
        film2.premiereAar = $scope.premiereAarModel;
        film2.trailer = $scope.trailerModel;
        film2.$update({id: 4809889046069248});
    };

    // Bemærk, at der ikke er nogen opsætning af JSON-variable i metoden.
    // At det kan lade sig gøre, hænger sammen med, at variablene i film.html
    // er identiske med attributnavnene i webservicens Film-klasse.
    // Tjaah, det duer ikke, da der skal laves konvertering.
    this.hentAlleFilmUdenKonvertering = function($scope) {
        Film.query().$promise.then(function(data) {
       // success
        $scope.film = data;
        }, 
        function(errResponse) {
            alert("Fejl i hentAlleFilm", errResponse);
        });
     };

    this.hentAlleFilm = function($scope) {
        Film.query().$promise.then(function(data) {
       // success
            $scope.film.splice(0, $scope.film.length);
            for(var i=0; i<data.length; i++)
            {
                $scope.film.push
                ({
                    premiereAar: data[i].premiereAar,
                    titel: decodeURIComponent(data[i].titel),
                    trailer: data[i].trailer,
                    instruktoer: decodeURIComponent(data[i].instruktoer),
                    id: data[i].id
                });
            }
        }, 
        function(errResponse) {
            alert("Fejl i hentAlleFilm", errResponse);
        });
     };

    // Ikke implementeret færdig
    this.sletFilm = function($scope) {
        Film.$delete({id: 4809889046069248});
    };

});
