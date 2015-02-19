var routerApp = angular.module('routerApp', ['ngAnimate', 'ngTouch', 'ngResource', 'ui.router', 'routerControllers', 'routerDirectives', 'routerServices', 'routerFilters']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('omhistorie');
    
    $stateProvider       
        .state('omhistorie', {
            url: '/omhistorie',
            templateUrl: 'templates/omhistorie.html',
            controller: 'omhistorieController'
        })
        .state('boeger', {
            url: '/boeger',
            templateUrl: 'templates/boeger.html',
            controller: 'bogController'
        })
        .state('boeger.collection', {
            url: '/collection',
            templateUrl: 'templates/bogCollection.html',
            controller: 'bogCollectionController'
        })
        .state('boeger.definition', {
            url: '/definition',
            templateUrl: 'templates/bogDefinition.html',
            controller: 'bogDefinitionController'
        })
        .state('boeger.crud', {
            url: '/crud',
            templateUrl: 'templates/bogCrud.html',
            controller: 'bogCrudController'
        })
        .state('boeger.links', {
            url: '/links',
            views: {
                '': { templateUrl: 'templates/links.html',
                                    controller: 'bogLinksController'
                },
                'columnOne@boeger.links': 
                        { template: '<b>Historielinks</b></br><a href="http://middelalderborge.dk/">Jyske middelalderborge</a></br><a href="http://danmarkshistorien.dk/forside/">Danmarkshistorien.dk</a></br><a href="http://www.historienu.dk/historie-nu_links_portal.htm">Historienu</a>' },
                'columnTwo@boeger.links': { template: '<b>Anmeldelser</b></br><a href="http://bog.nu/kategorier/historie-kultur-og-mytologi">Bog.nu</a></br><a href="http://www.historie-online.dk/nyt/bogfeature/indexa.htm">Historie-Online</a>'},
                'columnThree@boeger.links': { template: '<b>Egne links</b></br><a href="http://anetavlehva.appspot.com/">Andreassens anetavle</a></br><a href="http://anegeografihva.appspot.com/">Andreassens anegeografi</a>'}
        }
        })
        .state('film', {
            url: '/film',
            views: {
                '': { templateUrl: 'templates/film.html',
                                    controller: 'filmController'
                }
            }
            
        })
        .state('villefranche', {
            url: '/villefranche',
            views: {
                '': { templateUrl: 'templates/villefranche.html',
                      controller: 'villefrancheController'
                }
            }
            
        })
        .state('villefranche.generation1', {
            url: '/generation1',
            views: {
                '': { templateUrl: 'templates/generation1.html',
                      controller: 'generation1Controller'
                }
            }
        })
        .state('villefranche.generation2', {
            url: '/generation2',
            views: {
                '': { templateUrl: 'templates/generation2.html',
                      controller: 'generation2Controller'
                }
            }
            
        })
        .state('villefranche.generation3', {
            url: '/generation3',
            views: {
                '': { templateUrl: 'templates/generation3.html',
                      controller: 'generation3Controller'
                }
            }
            
        })
        .state('villefranche.kilder', {
            url: '/kilder',
            views: {
                '': { templateUrl: 'templates/kilder.html',
                      controller: 'kilderController'
                }
            }
        })
        .state('villefranche.kilder.breve', {
            url: '/breve',
            views: {
                '': { templateUrl: 'templates/breve.html',
                      controller: 'brevController'
                }
            }
        })
        .state('villefranche.kilder.breve.brev1', {
            url: '/brev1',
            views: {
                '': { templateUrl: 'templates/brev1.html',
                      controller: 'brev1Controller'
                }
            }
        })
        .state('villefranche.kilder.breve.brev2', {
            url: '/brev2',
            views: {
                '': { templateUrl: 'templates/brev2.html',
                      controller: 'brev2Controller'
                }
            }
        })
      .state('villefranche.kilder.skifteprotokoller', {
            url: '/skifteprotokoller',
            views: {
                '': { templateUrl: 'templates/skifteprotokoller.html',
                      controller: 'skifteprotokolController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller', {
            url: '/justitsprotokoller',
            views: {
                '': { templateUrl: 'templates/justitsprotokoller.html',
                      controller: 'justitsprotokolController'
                }
            }
        });

});

