angular.module('nbaStatsApp')
	.directive('sideBarDirective', function(){
		return {
			restrict: 'E',
			templateUrl: '/js/directives/sideBar/sideBarTmpl.html',
			controller: 'sideBarCtrl'
		}
	
});