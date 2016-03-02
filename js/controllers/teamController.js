angular.module('nbaStatsApp')
	.controller('teamController', function($scope, teamService) {
		
	$scope.teams = teamService.getTeams();
	

	
	$scope.getTeamName = function(name) {
		$scope.teamStandings = true;
		$scope.teams.forEach(function(team){
			if(name === team.teamName) {
				$scope.team = team;
				//console.log($scope.team);
			}
		})
	};
	
	
	
});