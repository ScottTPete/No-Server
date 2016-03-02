angular.module('nbaStatsApp', ['ui.router'])
	
	.config(function($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/views/homeTmpl.html'
			})
			.state ('players', {
				url: '/players',
				template: '<players-directive></players-directive>',
				//controller: 'playerController'
			})
			.state ('teams', {
				url: '/teams',
				templateUrl: '/js/directives/teams/teamsTmpl.html',
				controller: 'teamController'
			})
			
		$urlRouterProvider.otherwise('/');
})