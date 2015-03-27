var routerApp = angular.module('routerApp', ['ngAnimate', 'ngTouch', 'ngMessages', 'ngResource', 'ui.router', 'indexedDB', 'routerControllers', 'routerDirectives', 'routerServices', 'routerFilters', 'routerFactories']);

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
        .state('villefranche.litteratur', {
            url: '/litteratur',
            views: {
                '': { templateUrl: 'templates/litteratur.html',
                      controller: 'litteraturController'
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
        .state('villefranche.kilder.stamboeger', {
            url: '/stamboeger',
            views: {
                '': { templateUrl: 'templates/stamboeger.html',
                      controller: 'stambogController'
                }
            }
        })
        .state('villefranche.kilder.stamboeger.george1', {
            url: '/george1',
            views: {
                '': { templateUrl: 'templates/george1.html',
                      controller: 'stamboggeorge1Controller'
                }
            }
        })
        .state('villefranche.kilder.stamboeger.nicolai1', {
            url: '/nicolai1',
            views: {
                '': { templateUrl: 'templates/nicolai1.html',
                      controller: 'stambognicolai1Controller'
                }
            }
        })
        .state('villefranche.kilder.stamboeger.nicolai2', {
            url: '/nicolai2',
            views: {
                '': { templateUrl: 'templates/nicolai2.html',
                      controller: 'stambognicolai2Controller'
                }
            }
        })
        .state('villefranche.kilder.stamboeger.nicolai3', {
            url: '/nicolai3',
            views: {
                '': { templateUrl: 'templates/nicolai3.html',
                      controller: 'stambognicolai3Controller'
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
        })
        .state('villefranche.kilder.justitsprotokoller.jp1781a', {
            url: '/jp1781a',
            views: {
                '': { templateUrl: 'templates/jp1781a.html',
                      controller: 'jp1781aController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller.jp1784a', {
            url: '/jp1784a',
            views: {
                '': { templateUrl: 'templates/jp1784a.html',
                      controller: 'jp1784aController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller.jp1784b', {
            url: '/jp1784b',
            views: {
                '': { templateUrl: 'templates/jp1784b.html',
                      controller: 'jp1784bController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller.jp1789a', {
            url: '/jp1789a',
            views: {
                '': { templateUrl: 'templates/jp1789a.html',
                      controller: 'jp1789aController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller.jp1791a', {
            url: '/jp1791a',
            views: {
                '': { templateUrl: 'templates/jp1791a.html',
                      controller: 'jp1791aController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller.jp1791b', {
            url: '/jp1791b',
            views: {
                '': { templateUrl: 'templates/jp1791b.html',
                      controller: 'jp1791bController'
                }
            }
        })
        .state('villefranche.kilder.justitsprotokoller.jp1808a', {
            url: '/jp1808a',
            views: {
                '': { templateUrl: 'templates/jp1808a.html',
                      controller: 'jp1808aController'
                }
            }
        })
        .state('villefranche.kilder.forskning', {
            url: '/forskning',
            views: {
                '': { templateUrl: 'templates/forskning.html',
                      controller: 'forskningController'
                }
            }
        })
        .state('villefranche.kilder.forskning.petersen', {
            url: '/petersen',
            views: {
                '': { templateUrl: 'templates/petersen.html',
                      controller: 'petersenController'
                }
            }
        })
        .state('villefranche.kilder.forskning.malhache', {
            url: '/malhache',
            views: {
                '': { templateUrl: 'templates/malhache.html',
                      controller: 'malhacheController'
                }
            }
        })
        .state('villefranche.kilder.forskning.grutzner', {
            url: '/grutzner',
            views: {
                '': { templateUrl: 'templates/grutzner.html',
                      controller: 'grutznerController'
                }
            }
        })
        .state('villefranche.kilder.kirkeboeger', {
            url: '/kirkeboeger',
            views: {
                '': { templateUrl: 'templates/kirkeboeger.html',
                      controller: 'kirkebogController'
                }
            }
        })
        .state('villefranche.kilder.kirkeboeger.holme', {
            url: '/holme',
            views: {
                '': { templateUrl: 'templates/holme.html',
                      controller: 'holmeController'
                }
            }
        })
        .state('villefranche.kilder.kirkeboeger.holmstrup', {
            url: '/holmstrup',
            views: {
                '': { templateUrl: 'templates/holmstrup.html',
                      controller: 'holmstrupController'
                }
            }
        })
        .state('villefranche.kilder.kirkeboeger.kalundborg', {
            url: '/kalundborg',
            views: {
                '': { templateUrl: 'templates/kalundborg.html',
                      controller: 'kalundborgController'
                }
            }
        })
        .state('villefranche.kilder.kirkeboeger.maarslet', {
            url: '/maarslet',
            views: {
                '': { templateUrl: 'templates/maarslet.html',
                      controller: 'maarsletController'
                }
            }
        })
        .state('villefranche.kilder.kirkeboeger.raklev', {
            url: '/raklev',
            views: {
                '': { templateUrl: 'templates/raklev.html',
                      controller: 'raklevController'
                }
            }
        })
        .state('villefranche.kilder.folketaellinger', {
            url: '/folketaellinger',
            views: {
                '': { templateUrl: 'templates/folketaellinger.html',
                      controller: 'folketaellingController'
                }
            }
        })
        .state('villefranche.kilder.folketaellinger.ftgeorge', {
            url: '/ftgeorge',
            views: {
                '': { templateUrl: 'templates/ftgeorge.html',
                      controller: 'ftgeorgeController'
                }
            }
        })
        .state('villefranche.kilder.folketaellinger.ftnicolai', {
            url: '/ftnicolai',
            views: {
                '': { templateUrl: 'templates/ftnicolai.html',
                      controller: 'ftnicolaiController'
                }
            }
        })
        .state('villefranche.kilder.folketaellinger.ftniels', {
            url: '/ftniels',
            views: {
                '': { templateUrl: 'templates/ftniels.html',
                      controller: 'ftnielsController'
                }
            }
        });
});

routerApp.config(function ($indexedDBProvider) {
    $indexedDBProvider
      .connection('historieSamlingIndexedDB')
      .upgradeDatabase(1, function(event, db, tx){

        var objStore1 = db.createObjectStore('bog', {keyPath: 'id', autoIncrement:true });
        objStore1.createIndex('forfatter_idx', 'forfatter', {unique: false});
        objStore1.createIndex('titel_idx', 'titel', {unique: false});
        objStore1.createIndex('udgivelseaar_idx', 'isbn', {unique: false});
        objStore1.createIndex('isbn_idx', 'isbn', {unique: false});
        objStore1.createIndex('dk5_idx', 'dk5', {unique: false});

        var objStore2 = db.createObjectStore('film', {keyPath: 'id', autoIncrement:true });
        objStore2.createIndex('titel_idx', 'titel', {unique: false});
        objStore2.createIndex('premiereaar_idx', 'premiereaar', {unique: false});
        objStore2.createIndex('instruktoer_idx', 'instruktoer', {unique: false});
        objStore2.createIndex('trailer_idx', 'trailer', {unique: false});
      });
});

routerApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, charset=utf-8';
    $httpProvider.defaults.headers.post['Accept-Charset'] = 'charset=utf-8';
}]);
