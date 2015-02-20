/* Controllers */

var routerControllers = angular.module('routerControllers', []);

routerApp.controller('filmController', function($scope, $http, dataServiceLocal) {
    
   	$scope.films = [];

	$scope.hentAlleFilm = function() {
		dataServiceLocal.hentAlleFilm($scope, $http);
	};
        
	$scope.hentAlleFilm();

        $scope.youtubecode = 'UmcttiebIN0';

	$scope.visTrailer = function(item) {
            $scope.youtubecode = item.trailer;
        };
});

routerApp.controller('bogController', function($scope, $http, dataServiceLocal) {
	
    $scope.visDefault = false;

    $scope.boeger = [];
            
    $scope.hentAlleBoeger = function(){
	dataServiceLocal.hentAlleBoeger($scope, $http);
    };
    
   $scope.hentAlleBoeger();
});

routerApp.controller('omhistorieController', function($scope, $state) {

    $scope.images = [ {
		src : 'img1.JPG',
		title : 'Pic 1'
	}, {
		src : 'img2.jpg',
		title : 'Pic 2'
	}, {
		src : 'img3.JPG',
		title : 'Pic 3'
	}, {
		src : 'img4.JPG',
		title : 'Pic 4'
	}, {
		src : 'img5.JPG',
		title : 'Pic 5'
	} ];
    
    $state.transitionTo('omhistorie');

});

routerApp.controller('bogCrudController', function($scope) {
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
    $scope.kristkirkePath = "img/kristkirke.jpg";
    $scope.broedPath = "img/broed.png";
    $scope.kridtpibePath = "img/kridtpibe.png";
    $scope.spidsrodPath = "img/spidsrod.png";
    $scope.vinstuePath = "img/vinstue.png";
    $scope.uniformPath = "img/uniform.png";
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
