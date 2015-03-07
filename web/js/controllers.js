/* Controllers */

var routerControllers = angular.module('routerControllers', []);

routerControllers.controller('filmController', function($scope, $indexedDB, dataServiceRest) {
    
   	$scope.film = [];
        
        $scope.sletFilm = function() {
		dataServiceRest.sletFilm($scope);
	};

        $scope.opretFilm = function() {
                if($scope.opretKodeModel === 'hva1969')
                {
                    dataServiceRest.opretFilm($scope, $indexedDB);
                }
                $scope.instruktoerModel = "";
                $scope.filmTitelModel = "";
                $scope.premiereAarModel = "";
                $scope.trailerModel = "";           
        };

	$scope.opdaterFilm = function() {
		dataServiceRest.opdaterFilm($scope, $indexedDB);
	};

        $scope.hentAlleFilm = function() {
		dataServiceRest.hentAlleFilm($scope, $indexedDB);
	};
        
        $scope.hentAlleFilm();

        $scope.youtubecode = 'UmcttiebIN0';

	$scope.visTrailer = function(item) {
            $scope.youtubecode = item.trailer;
        };
        
        $scope.$watch('film', function() { 
            dataServiceRest.opretAlleFilmIndexedDB($scope, $indexedDB);
        }, true);
});

routerControllers.controller('bogController', function($scope, $http, $indexedDB, dataService) {

    $scope.visDefault = false;

    $scope.boeger = [];
                       
    $scope.hentAlleBoeger = function(){
	dataService.hentAlleBoeger($scope, $http, $indexedDB);
    };
    
   $scope.hentAlleBoeger();
});

routerControllers.controller('omhistorieController', function($scope, $state, $sce, $indexedDB) {

    var req = indexedDB.deleteDatabase('historieSamlingIndexedDB');
    req.onsuccess = function () {
        /* console.log("Databasen er slettet"); */
    };
    req.onerror = function () {
        /* console.log("Kunne ikke slette databasen"); */
    };
    req.onblocked = function () {
        /* console.log("Kunne ikke slette databasen pga. blokering"); */
    };

    $scope.images = [ {
		src : 'img1.JPG',
		text : $sce.trustAsHtml('Torbenfeldt slot')
	}, 
        {
		src : 'img2.jpg',
		text : $sce.trustAsHtml('Sp&oslash;ttrup borg')
	}, 
        {
		src : 'img3.JPG',
		text : $sce.trustAsHtml('Asserbo slotsruin')
	}, 
        {
		src : 'img4.JPG',
		text : $sce.trustAsHtml('Tallinn bymur')
	}, 
        {
		src : 'img5.JPG',
		text : $sce.trustAsHtml('Gjorslev slot')
	},
        {
		src : 'img6.jpg',
		text : $sce.trustAsHtml('Hammershus')
	}, 
        {
		src : 'img7.jpg',
		text : $sce.trustAsHtml('&Oslash;sterlars rundkirke')
	},
        {
		src : 'img8.jpg',
		text : $sce.trustAsHtml('Borren')
	},
        {
		src : 'img9.jpg',
		text : $sce.trustAsHtml('Vitsk&oslash;l kloster')
	},
        {
		src : 'img10.JPG',
		text : $sce.trustAsHtml('Koldinghus')
	},
        {
		src : 'img11.JPG',
		text : $sce.trustAsHtml('Karnan')
	},
        {
		src : 'img13.JPG',
		text : $sce.trustAsHtml('Dannevirke')
	},
        {
		src : 'img14.JPG',
		text : $sce.trustAsHtml('Kalmar slot')
	},
        {
		src : 'img15.JPG',
		text : $sce.trustAsHtml('Visby bymur')
	},
        {
		src : 'img16.JPG',
		text : $sce.trustAsHtml('Borgholm')
	},
        {
		src : 'img17.JPG',
		text : $sce.trustAsHtml('Vordingborg')
	},
        {
		src : 'img18.JPG',
		text : $sce.trustAsHtml('Borreby')
	},
        {
		src : 'img19.JPG',
		text : $sce.trustAsHtml('Kors&oslash;r')
	},
        {
		src : 'img20.JPG',
		text : $sce.trustAsHtml('Vadstena')
	}
    ];
    
    $state.transitionTo('omhistorie');

});

routerControllers.controller('bogCrudController', function($scope, $http, $indexedDB, dataService) {
    
    $scope.opretBog = function(){
            if($scope.passwordModel === 'hva1969')
            {
                        dataService.opretBog($scope, $http, $indexedDB);
            }
    };
    
});

routerControllers.controller('bogLinksController', function($scope) {
});

routerControllers.controller('bogDefinitionController', function($scope) {
});

routerControllers.controller("villefrancheController", function($scope, $sce) {		
    $scope.forord = $sce.trustAsResourceUrl("templates/forord.html");
});

routerControllers.controller('generation1Controller', function($scope) {
    $scope.ejderstenenPath = "img/ejderstenen.JPG";
    $scope.sjoverPath = "img/sjover.png";
    $scope.kristkirkePath = "img/kristkirke.jpg";    $scope.broedPath = "img/broed.png";
    $scope.kridtpibePath = "img/kridtpibe.png";
    $scope.spidsrodPath = "img/spidsrod.png";
    $scope.vinstuePath = "img/vinstue.png";
    $scope.uniformPath = "img/uniform.png";
    $scope.gronnegade37Path = "img/Gronnegade37.JPG"; 
    $scope.haarpiskPath = "img/haarpisk.jpg";
});

routerControllers.controller('generation2Controller', function($scope) {
    $scope.hamborgPath = "img/hamborg.png";
    $scope.inspektionPath = "img/inspektion.jpg";
    $scope.klokkespilPath = "img/klokkespil.jpg";
    $scope.refsnaesPath = "img/refsnaes.jpg";
    $scope.skambaekPath = "img/skambaek.jpg";   
});

routerControllers.controller('generation3Controller', function($scope) {
});

routerControllers.controller('litteraturController', function($scope) {
});

routerControllers.controller('kilderController', function($scope) {
});

routerControllers.controller('brevController', function($scope, $sce) {
       $scope.ombreve = $sce.trustAsResourceUrl("templates/ombreve.html");
});

routerControllers.controller('brev1Controller', function($scope) {
});

routerControllers.controller('brev2Controller', function($scope) {
});

routerControllers.controller('skifteprotokolController', function($scope) {
});

routerControllers.controller('justitsprotokolController', function($scope, $sce) {
       $scope.omjustitsprotokoller = $sce.trustAsResourceUrl("templates/omjustitsprotokoller.html");   
});

routerControllers.controller('jp1781aController', function($scope) {
});

routerControllers.controller('jp1784aController', function($scope) {
});

routerControllers.controller('jp1784bController', function($scope) {
});

routerControllers.controller('jp1789aController', function($scope) {
});

routerControllers.controller('jp1791aController', function($scope) {
});

routerControllers.controller('jp1791bController', function($scope) {
});

routerControllers.controller('jp1808aController', function($scope) {
});

routerControllers.controller('stambogController', function($scope, $sce) {
       $scope.omstamboeger = $sce.trustAsResourceUrl("templates/omstamboeger.html");   
});

routerControllers.controller('stamboggeorge1Controller', function($scope) {
});

routerControllers.controller('stambognicolai1Controller', function($scope) {
});

routerControllers.controller('stambognicolai2Controller', function($scope) {
});

routerControllers.controller('stambognicolai3Controller', function($scope) {
});

routerControllers.controller('forskningController', function($scope, $sce) {
       $scope.omforskning = $sce.trustAsResourceUrl("templates/omforskning.html");   
});

routerControllers.controller('petersenController', function($scope) {
});

routerControllers.controller('malhacheController', function($scope) {
});

routerControllers.controller('grutznerController', function($scope) {
});

routerControllers.controller('stambognicolai3Controller', function($scope) {
});

routerControllers.controller('kirkebogController', function($scope, $sce) {
       $scope.omforskning = $sce.trustAsResourceUrl("templates/omkirkeboeger.html");   
});

routerControllers.controller('holmeController', function($scope) {
});

routerControllers.controller('holmstrupController', function($scope) {
});

routerControllers.controller('maarsletController', function($scope) {
});

routerControllers.controller('kalundborgController', function($scope) {
});

routerControllers.controller('raklevController', function($scope) {
});

routerControllers.controller('folketaellingController', function($scope, $sce) {
       $scope.omfolketaellinger = $sce.trustAsResourceUrl("templates/omfolketaellinger.html");   
});

routerControllers.controller('ftgeorgeController', function($scope) {
});

routerControllers.controller('ftnielsController', function($scope) {
});

routerControllers.controller('ftnicolaiController', function($scope) {
});

