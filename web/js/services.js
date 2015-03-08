var routerServices = angular.module('routerServices', ['indexedDB']);

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
	    		alert("Ajax fejl ifm. hentAlleFilm..."+status);
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

routerServices.service('dataServiceRest', function DataServiceRest($resource, $indexedDB) {

    var Film = $resource('http://9-dot-historiesamlingservice.appspot.com/film:id');

    this.opretFilm = function($scope, $indexedDB) {
            var film1 = new Film();
            film1.instruktoer = encodeURIComponent($scope.instruktoerModel);
            film1.titel = encodeURIComponent($scope.filmTitelModel);
            film1.premiereAar = $scope.premiereAarModel;
            film1.trailer = $scope.trailerModel;
            film1.$save();   
            
            // Oprettet filmen lokalt
            if($scope.idb === true)
            {
                var filmensdata =
                {
                        premiereAar: $scope.premiereAarModel,
                        titel: encodeURIComponent($scope.filmTitelModel),
                        trailer: $scope.trailerModel,
                        instruktoer: encodeURIComponent($scope.instruktoerModel)
                };               
                this.opretFilmIndexedDB(filmensdata, $indexedDB);
            }
    };

    this.opretFilmIndexedDB = function(fdata, $indexedDB) {
            $indexedDB.openStore('film', function(store) {
              store.insert({"titel": encodeURIComponent(fdata.titel),"instruktoer": encodeURIComponent(fdata.instruktoer), "trailer": fdata.trailer, "premiereaar": fdata.premiereAar}).then(function(e){});
            });
    };

    // Ikke implementeret færdig.
    this.opdaterFilm = function($scope) {
        var film2 = Film.get({id: 5139717033033728});       
        film2.instruktoer = encodeURIComponent($scope.instruktoerModel);
        film2.titel = encodeURIComponent($scope.filmTitelModel);
        film2.premiereAar = $scope.premiereAarModel;
        film2.trailer = $scope.trailerModel;
        film2.$save();
    };

    // Bemærk, at der ikke er nogen opsætning af JSON-variable i metoden.
    // At det kan lade sig gøre, hænger sammen med, at variablene i film.html
    // er identiske med attributnavnene i webservicens Film-klasse.
    // Tjaah, det duer ikke, da der skal laves konvertering - decode/encode.
    this.hentAlleFilmUdenKonvertering = function($scope) {
        Film.query().$promise.then(function(data) {
       // success
        $scope.film = data;
        }, 
        function(errResponse) {
            alert("Fejl i hentAlleFilm", errResponse);
        });
     };

    this.hentAlleFilm = function($scope, $indexedDB) {
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
     
     this.hentAlleFilmIndexedDB = function($scope, $indexedDB) {
         $indexedDB.openStore('film', function(store) {
              store.getAll().then(function(data) {  
                    $scope.film.splice(0, $scope.film.length);
                    for(var i=0; i<data.length; i++)
                    {
                        $scope.film.push
                        ({
                            premiereAar: data[i].premiereaar,
                            titel: decodeURIComponent(data[i].titel),
                            trailer: data[i].trailer,
                            instruktoer: decodeURIComponent(data[i].instruktoer),
                            id: data[i].id
                        });               
                    }           
              });
         });
     };

    this.opretAlleFilmIndexedDB = function($scope, $indexedDB) {
         filmdata = [];
         // Sådan skal der loopes over scope-variabel.
        angular.forEach($scope.film, function(f) {
                filmdata.push
                ({
                    premiereAar: f.premiereAar,
                    titel: decodeURIComponent(f.titel),
                    trailer: f.trailer,
                    instruktoer: decodeURIComponent(f.instruktoer)
                });               
        });
        
        for(i=0; i<filmdata.length; i++)
        {
                this.opretFilmIndexedDB(filmdata[i], $indexedDB);
        }
     };

    // Ikke implementeret færdig
    this.sletFilm = function($scope) {
        Film.$delete({id: 5139717033033728});
    };

});
