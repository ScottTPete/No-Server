angular.module('nbaStatsApp', ['ui.router'])
	
	.config(function($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/views/homeTmpl.html'
			})
			.state ('players', {
				url: '/players',
				templateUrl: '/js/directives/players/playersTmpl.html',
				controller: 'playerController'
			})
			.state ('teams', {
				url: '/teams',
				templateUrl: '/js/directives/teams/teamsTmpl.html',
				controller: 'teamController'
			})
			
		$urlRouterProvider.otherwise('/');
})