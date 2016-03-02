angular.module('nbaStatsApp')
	.directive('playersDirective', function(){
	return {
		templateUrl: 'js/directives/players/playersTmpl.html',
		restrict: 'E',
		controller: function($scope, playerService, $state) {
//			console.log($state)
			$scope.state = $state.current.name;
			$scope.players = playerService.getPlayers();
			console.log($scope.players);
	
			$scope.getPlayerName = function(name) {
				console.log(name);
				$scope.statsLeaders = true;
				$scope.playerBox = true;
				$scope.players.forEach(function(player){
					console.log(player)
					if(name === player.name) {
						$scope.playerSelected = player;
					}
				});
			};
		}
	};
})