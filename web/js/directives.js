var routerDirectives = angular.module('routerDirectives',[]);

routerDirectives.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start på automatisk slideshow*/
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,5000);
			},5000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
    },
	templateUrl:'templates/images.html'
  }
});

routerDirectives.directive('myYoutube', function($sce) {
	  return {
	    restrict: 'EA',
	    scope: { youtubecode:'=' },
	    replace: true,
	    template: '<div style="height:400px;width:600px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
	    link: function (scope) {
	        scope.$watch('youtubecode', function (newVal) {
	           if (newVal) {
	               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
	           }
	        });
	    }
	  };
});