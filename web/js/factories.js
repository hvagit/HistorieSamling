var routerFactories = angular.module('routerFactories', []);

routerFactories.factory('Filmen', ['$resource', function($resource) {
    return $resource('http://9-dot-historiesamlingservice.appspot.com/film:id', {}, 
    {
      hentAlleFilm: {method:'GET', params:{id:''}, isArray:true},
      opretFilm: {method:'POST'},
      opdaterFilm: {method:'PUT', params: {id: '@id'}},
      fjernFilm: {method:'DELETE', params: {id: '@id'}}
    });    
}]);

routerFactories.factory('gemTilstand', function() {
      return {	remoteKald: false,
                remoteKaldTid: 0,
                lokaltKaldTid: 0,
                idbOprettet: false
      		};
});
