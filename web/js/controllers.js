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
    $scope.ejderstenenPath = "img/ejderstenen.JPG"
    $scope.sjoverPath = "img/sjover.png"
    $scope.kristkirkePath = "img/kristkirke.jpg"
    $scope.broedPath = "img/broed.png"
    $scope.kridtpibePath = "img/kridtpibe.png"
    $scope.spidsrodPath = "img/spidsrod.png"
    $scope.vinstuePath = "img/vinstue.png"
    $scope.uniformPath = "img/uniform.png"
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

routerApp.controller('justitsprortokolController', function($scope, $sce) {
       $scope.omjustitsprortokoller = $sce.trustAsResourceUrl("templates/omjustitsprortokoller.html");   
});

omjustitsprortokoller