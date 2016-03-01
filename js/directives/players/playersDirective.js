angular.module('nbaStatsApp')
	.directive('playersDirective', function(){
	return {
		templateUrl: 'js/directives/players/playersTmpl.html',
		restrict: 'E',
		controller: function($scope, playerService) {
			$scope.players = playerService.getPlayers();

			$scope.getPlayerName = function(name) {
				$scope.players.forEach(function(player){
					if(name === player.name) {
						$scope.players = player;
						//console.log($scope.team);
					}
				});
			};
		}
	};
})