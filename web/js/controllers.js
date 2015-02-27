/* Controllers */

var routerControllers = angular.module('routerControllers', []);

routerApp.controller('filmController', function($scope, dataServiceRest) {
    
   	$scope.film = [];

        $scope.sletFilm = function() {
		dataServiceRest.sletFilm($scope);
	};

        $scope.opretFilm = function() {
                if($scope.opretKodeModel === 'hva')
                {
                    dataServiceRest.opretFilm($scope);
                }
        };

	$scope.opdaterFilm = function() {
		dataServiceRest.opdaterFilm($scope);
	};

        $scope.hentAlleFilm = function() {
		dataServiceRest.hentAlleFilm($scope);
	};
        
	$scope.hentAlleFilm();

        $scope.youtubecode = 'UmcttiebIN0';

	$scope.visTrailer = function(item) {
            $scope.youtubecode = item.trailer;
        };
});

routerApp.controller('bogController', function($scope, $http, dataService) {
	
    $scope.visDefault = false;

    $scope.boeger = [];
                       
    $scope.hentAlleBoeger = function(){
	dataService.hentAlleBoeger($scope, $http);
    };
    
   $scope.hentAlleBoeger();
});

routerApp.controller('omhistorieController', function($scope, $state, $sce) {

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

routerApp.controller('bogCrudController', function($scope, $http, dataService) {
    
    $scope.opretBog = function(){
            if($scope.passwordModel === 'hva')
            {
                        dataService.opretBog($scope, $http);
            }
    };
    
});

routerApp.controller('bogLinksController', function($scope) {
});

routerApp.controller('bogDefinitionController', function($scope) {
});

routerApp.controller("villefrancheController", function($scope, $sce) {		
    $scope.forord = $sce.trustAsResourceUrl("templates/forord.html");
});

routerApp.controller('generation1Controller', function($scope) {
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

routerApp.controller('generation2Controller', function($scope) {
    $scope.hamborgPath = "img/hamborg.png";
    $scope.inspektionPath = "img/inspektion.jpg";
    $scope.klokkespilPath = "img/klokkespil.jpg";
    $scope.refsnaesPath = "img/refsnaes.jpg";
    $scope.skambaekPath = "img/skambaek.jpg";   
});

routerApp.controller('generation3Controller', function($scope) {
});

routerApp.controller('litteraturController', function($scope) {
});

routerApp.controller('kilderController', function($scope) {
});

routerApp.controller('brevController', function($scope, $sce) {
       $scope.ombreve = $sce.trustAsResourceUrl("templates/ombreve.html");
});

routerApp.controller('brev1Controller', function($scope) {
});

routerApp.controller('brev2Controller', function($scope) {
});

routerApp.controller('skifteprotokolController', function($scope) {
});

routerApp.controller('justitsprotokolController', function($scope, $sce) {
       $scope.omjustitsprotokoller = $sce.trustAsResourceUrl("templates/omjustitsprotokoller.html");   
});

routerApp.controller('jp1781aController', function($scope) {
});

routerApp.controller('jp1784aController', function($scope) {
});

routerApp.controller('jp1784bController', function($scope) {
});

routerApp.controller('jp1789aController', function($scope) {
});

routerApp.controller('jp1791aController', function($scope) {
});

routerApp.controller('jp1791bController', function($scope) {
});

routerApp.controller('jp1808aController', function($scope) {
});

routerApp.controller('stambogController', function($scope, $sce) {
       $scope.omstamboeger = $sce.trustAsResourceUrl("templates/omstamboeger.html");   
});

routerApp.controller('stamboggeorge1Controller', function($scope) {
});

routerApp.controller('stambognicolai1Controller', function($scope) {
});

routerApp.controller('stambognicolai2Controller', function($scope) {
});

routerApp.controller('stambognicolai3Controller', function($scope) {
});

routerApp.controller('forskningController', function($scope, $sce) {
       $scope.omforskning = $sce.trustAsResourceUrl("templates/omforskning.html");   
});

routerApp.controller('petersenController', function($scope) {
});

routerApp.controller('malhacheController', function($scope) {
});

routerApp.controller('grutznerController', function($scope) {
});

routerApp.controller('stambognicolai3Controller', function($scope) {
});

routerApp.controller('kirkebogController', function($scope, $sce) {
       $scope.omforskning = $sce.trustAsResourceUrl("templates/omkirkeboeger.html");   
});

routerApp.controller('holmeController', function($scope) {
});

routerApp.controller('holmstrupController', function($scope) {
});

routerApp.controller('maarsletController', function($scope) {
});

routerApp.controller('kalundborgController', function($scope) {
});

routerApp.controller('raklevController', function($scope) {
});

routerApp.controller('folketaellingController', function($scope, $sce) {
       $scope.omfolketaellinger = $sce.trustAsResourceUrl("templates/omfolketaellinger.html");   
});

routerApp.controller('ftgeorgeController', function($scope) {
});

routerApp.controller('ftnielsController', function($scope) {
});

routerApp.controller('ftnicolaiController', function($scope) {
});

