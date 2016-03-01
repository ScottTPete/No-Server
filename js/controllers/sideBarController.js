angular.module('nbaStatsApp')
	.controller('sideBarCtrl', function ($scope, $state) {
		
		$scope.state = $state.current.name;
})