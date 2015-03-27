var routerFactories = angular.module('routerFactories', []);

/* Nedenstående er velegnet til authentication headers */
routerFactories.factory('Filmen', ['$resource', function($resource) {
    return $resource('http://9-dot-historiesamlingservice.appspot.com/film:id', {}, 
    {
      hentAlleFilm: {method:'GET', params:{id:''}, isArray:true, headers: { 'auth-token': 'C3PO R2D2' }},
      opretFilm: {method:'POST', headers: { 'auth-token': 'C3PO R2D2' }},
      opdaterFilm: {method:'PUT', params: {id: '@id'}, headers: { 'auth-token': 'C3PO R2D2' }},
      fjernFilm: {method:'DELETE', params: {id: '@id'}, headers: { 'auth-token': 'C3PO R2D2' }}
    });    
}]);

routerFactories.factory('gemTilstand', function() {
      return {	remoteKald: false,
                remoteKaldTid: 0,
                lokaltKaldTid: 0,
                idbOprettet: false
      		};
});

