angular.module('nbaStatsApp')
	.controller('playerController', function($scope, playerService) {

	$scope.players = playerService.players;

	$scope.toggleSearch = function() {
		
		$('.searchFor').css('display', 'inline-block');
		
	};
});