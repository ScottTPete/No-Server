angular.module('nbaStatsApp')
	.controller('teamController', function($scope, teamService) {
		
	$scope.teams = teamService.getTeams();
	
	$scope.test = 'Test';
	
	$scope.getTeamName = function(name) {
		$scope.teams.forEach(function(team){
			if(name === team.teamName) {
				$scope.team = team;
				console.log($scope.team);
			}
		})
	}
	
	
	
});