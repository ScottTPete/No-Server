angular.module('nbaStatsApp')
	.service('playerService', function() {
	
	var players = [
		{
			name: 'LeBron James',
			ppg: 24.7,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Stephen Curry',
			ppg: 30.7,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'James Harden',
			ppg: 28.5,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Kevin Durant',
			ppg: 27.9,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Demarcus Cousins',
			ppg: 27.1,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Damian Lillard',
			ppg: 25.4,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Russel Westbrook',
			ppg: 24.4,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Anthony Davis',
			ppg: 24.1,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Paul George',
			ppg: 23.4,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'DeMar Derozan',
			ppg: 23.1,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Jimmy Butler',
			ppg: 22.4,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Klay Thompson',
			ppg: 21.8,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Isiah Thomas',
			ppg: 21.5,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Carmelo Anthony',
			ppg: 21.5,
			img: '/images/nba-logo-vector-01.png'
		},
		{
			name: 'Kyle Lowry',
			ppg: 21.4,
			img: '/images/nba-logo-vector-01.png'
		},
		
		
	];
	
	this.getPlayers = function() {
		return players;
	}

})