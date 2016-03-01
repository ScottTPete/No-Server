angular.module('nbaStatsApp')
	.service('teamService', function($http){
	
	var teams = [
		{
			teamName: 'Hawks',
			city: 'Atlanta',
			logo: 'images/hawks-logo.gif',
			wins: 31,
			losses: 27,
			percent: .534,
			homeWins: 17,
			homeLosses: 12,
			roadWins: 14,
			roadLosses: 15,
			
			startingFive: {
				powerForward: 'Paul Millsap',
				center: 'Al Horford',
				pointGuard: 'Jeff Teague',
				shootingGuard: 'Kyle Korver',
				smallForward: 'Kent Bazemore'
			}
		},
		{
			teamName: 'Celtics',
			city: 'Boston',
			logo: 'images/boston-logo.gif',
			wins: 34,
			losses: 25,
			percent: .576,
			homeWins: 18,
			homeLosses: 10,
			roadWins: 16,
			roadLosses: 15,

			startingFive: {
				powerForward: 'Amir Johnson',
				center: 'Jarred Sullinger',
				pointGuard: 'Isiah Thomas',
				shootingGuard: 'Avery Bradley',
				smallForward: 'Jae Crowder'
			}
		},
		{
			teamName: 'Brooklyn Nets',
			city: 'Brooklyn',
			logo: 'images/nets-logo.gif',
			wins: 16,
			losses: 42,
			percent: .276,
			homeWins: 11,
			homeLosses: 22,
			roadWins: 5,
			roadLosses: 20,

			startingFive: {
				powerForward: 'Thaddeus Young',
				center: 'Brook Lopez',
				pointGuard: 'Donald Sloan',
				shootingGuard: 'Bojan Bogdanavic',
				smallForward: 'Wayne Ellington'
			}
		},
		{
			teamName: 'Hornets',
			city: 'Charlotte',
			logo: 'images/hornets-logo.gif',
			wins: 29,
			losses: 27,
			percent: .518,
			homeWins: 19,
			homeLosses: 9,
			roadWins: 10,
			roadLosses: 18,

			startingFive: {
				powerForward: 'Marvin Williams',
				center: 'Al Jefferson',
				pointGuard: 'Kemba Walkers',
				shootingGuard: 'Courtney Lee',
				smallForward: 'Nicolai Batum'
			}
		},
		{
			teamName: 'Bulls',
			city: 'Chicago',
			logo: 'images/buls-logo.gif',
			wins: 30,
			losses: 26,
			percent: .536,
			homeWins: 19,
			homeLosses: 10,
			roadWins: 11,
			roadLosses: 16,

			startingFive: {
				powerForward: 'Taj Gibson',
				center: 'Pau Gasol',
				pointGuard: 'Derrick Rose',
				shootingGuard: 'Jimmy Butler',
				smallForward: 'Tony Snell'
			}
		},
		{
			teamName: 'Cavaliers',
			city: 'Cleveland',
			logo: 'images/cavs-logo.gif',
			wins: 41,
			losses: 15,
			percent: .732,
			homeWins: 24,
			homeLosses: 5,
			roadWins: 17,
			roadLosses: 10,

			startingFive: {
				powerForward: 'Kevin Love',
				center: 'Tristan Thompson',
				pointGuard: 'Kyrie Irving',
				shootingGuard: 'J.R. Smith',
				smallForward: 'LeBron James'
			}
		},
		{
			teamName: 'Mavericks',
			city: 'Dallas',
			logo: 'images/mavs-logo.gif',
			wins: 30,
			losses: 28,
			percent: .517,
			homeWins: 16,
			homeLosses: 12,
			roadWins: 14,
			roadLosses: 16,

			startingFive: {
				powerForward: 'Dirk Nowitzki',
				center: 'Zaza Pachulia',
				pointGuard: 'Deron Williams',
				shootingGuard: 'Wesley Matthews',
				smallForward: 'Chandler Parsons'
			}
		},
		{
			teamName: 'Nuggets',
			city: 'Denver',
			logo: 'images/denver-logo.gif',
			wins: 23,
			losses: 35,
			percent: .397,
			homeWins: 11,
			homeLosses: 17,
			roadWins: 12,
			roadLosses: 18,

			startingFive: {
				powerForward: 'Kenneth Faried',
				center: 'Nikola Jokic',
				pointGuard: 'Emmanuel Mudiay',
				shootingGuard: 'Garry Harris',
				smallForward: 'Danilo Gallinari'
			}
		},
		{
			teamName: 'Pistons',
			city: 'Detrot',
			logo: 'images/pistons-logo.gif',
			wins: 29,
			losses: 29,
			percent: .500,
			homeWins: 17,
			homeLosses: 11,
			roadWins: 12,
			roadLosses: 18,

			startingFive: {
				powerForward: 'Marcus Morris',
				center: 'Andre Drummond',
				pointGuard: 'Reggie Jackson',
				shootingGuard: 'Kentavious Caldwell-Pope',
				smallForward: 'Tobias Harris'
			}
		},
		{
			teamName: 'Warriors',
			city: 'Golden State',
			logo: 'images/warriors.gif',
			wins: 52,
			losses: 5,
			percent: .912,
			homeWins: 24,
			homeLosses: 0,
			roadWins: 28,
			roadLosses: 5,

			startingFive: {
				powerForward: 'Draymond Green',
				center: 'Andrew Bogut',
				pointGuard: 'Stephen Curry',
				shootingGuard: 'Klay Thompson',
				smallForward: 'Harrison Barnes'
			}
		},
		{
			teamName: 'Rockets',
			city: 'Houston',
			logo: 'images/rockets-logo.gif',
			wins: 29,
			losses: 29,
			percent: .500,
			homeWins: 16,
			homeLosses: 13,
			roadWins: 13,
			roadLosses: 16,

			startingFive: {
				powerForward: 'Josh Smith',
				center: 'Dwight Howard',
				pointGuard: 'Partrick Beverly',
				shootingGuard: 'James Harden',
				smallForward: 'Trevor Ariza'
			}
		},
		{
			teamName: 'Pacers',
			city: 'Indiana',
			logo: 'images/pacers-logo.gif',
			wins: 31,
			losses: 26,
			percent: .544,
			homeWins: 18,
			homeLosses: 9,
			roadWins: 13,
			roadLosses: 17,

			startingFive: {
				powerForward: 'Myles Turner',
				center: 'Ian Mahimi',
				pointGuard: 'George Hill',
				shootingGuard: 'Monta Ellis',
				smallForward: 'Paul George'
			}
		},
		{
			teamName: 'Clippers',
			city: 'Los Angeles',
			logo: 'images/clippers-logo.gif',
			wins: 37,
			losses: 20,
			percent: .649,
			homeWins: 19,
			homeLosses: 10,
			roadWins: 18,
			roadLosses: 10,

			startingFive: {
				powerForward: 'Blake Griffin',
				center: 'DeAndre Jordan',
				pointGuard: 'Chris Paul',
				shootingGuard: 'J.J. Reddick',
				smallForward: 'Paul Pierce'
			}
		},
		{
			teamName: 'Lakers',
			city: 'Los Angeles',
			logo: 'images/lakers-logo.gif',
			wins: 11,
			losses: 48,
			percent: .186,
			homeWins: 6,
			homeLosses: 19,
			roadWins: 5,
			roadLosses: 29,

			startingFive: {
				powerForward: 'Julius Randle',
				center: 'Roy Hibbert',
				pointGuard: 'DeAngelo Russel',
				shootingGuard: 'Jordan Clarkson',
				smallForward: 'Kobe Bryant'
			}
		},
		{
			teamName: 'Grizzlies',
			city: 'Memphis',
			logo: 'images/memphis-logo.gif',
			wins: 33,
			losses: 23,
			percent: .589,
			homeWins: 21,
			homeLosses: 9,
			roadWins: 12,
			roadLosses: 14,

			startingFive: {
				powerForward: 'Zach Randolp',
				center: 'Marc Gasol',
				pointGuard: 'Mike Conley',
				shootingGuard: 'Tony Allen',
				smallForward: 'Matt Barnes'
			}
		},
		{
			teamName: 'Heat',
			city: 'Miami',
			logo: 'images/heat-logo.gif',
			wins: 32,
			losses: 25,
			percent: .561,
			homeWins: 18,
			homeLosses: 12,
			roadWins: 14,
			roadLosses: 13,

			startingFive: {
				powerForward: 'Chris Bosh',
				center: 'Hassan Whiteside',
				pointGuard: 'Goran Dragic',
				shootingGuard: 'Dwayne Wade',
				smallForward: 'Justise Winslow'
			}
		},
		{
			teamName: 'Bucks',
			city: 'Milwaukee',
			logo: 'images/bucks-logo.gif',
			wins: 24,
			losses: 34,
			percent: .414,
			homeWins: 16,
			homeLosses: 9,
			roadWins: 8,
			roadLosses: 25,

			startingFive: {
				powerForward: 'Jabari Parker',
				center: 'Greg Monroe',
				pointGuard: 'Michael Carter-Williams',
				shootingGuard: 'Khris Middleton',
				smallForward: 'Giannis Antetokounmpo'
			}
		},
		{
			teamName: 'Timberwolves',
			city: 'Minnesota',
			logo: 'images/wolves-logo.gif',
			wins: 18,
			losses: 40,
			percent: .310,
			homeWins: 10,
			homeLosses: 20,
			roadWins: 8,
			roadLosses: 20,

			startingFive: {
				powerForward: 'Gorgui Dieng',
				center: 'Karl-Anthony Towns',
				pointGuard: 'Ricky Rubio',
				shootingGuard: 'Andrew Wiggins',
				smallForward: 'Zach Lavine'
			}
		},
		{
			teamName: 'Pelicans',
			city: 'New Orleans',
			logo: 'images/pelicans-logo.gif',
			wins: 23,
			losses: 34,
			percent: .404,
			homeWins: 16,
			homeLosses: 12,
			roadWins: 7,
			roadLosses: 22,

			startingFive: {
				powerForward: 'Anthony Davis',
				center: 'Omer Asik',
				pointGuard: 'Jrue Holiday',
				shootingGuard: 'Tyreke Evans',
				smallForward: 'Dante Cunningham'
			}
		},
		{
			teamName: 'Knicks',
			city: 'New York',
			logo: 'images/knicks-logo.gif',
			wins: 24,
			losses: 35,
			percent: .407,
			homeWins: 14,
			homeLosses: 16,
			roadWins: 10,
			roadLosses: 19,

			startingFive: {
				powerForward: 'Kristaps Porzingis',
				center: 'Robin Lopez',
				pointGuard: 'Jose Calderon',
				shootingGuard: 'Arron Afflalo',
				smallForward: 'Carmelo Anthony'
			}
		},
		{
			teamName: 'Thunder',
			city: 'Oklahoma City',
			logo: 'images/thunder-logo.gif',
			wins: 41,
			losses: 17,
			percent: .707,
			homeWins: 25,
			homeLosses: 7,
			roadWins: 16,
			roadLosses: 10,

			startingFive: {
				powerForward: 'Serge Ibaka',
				center: 'Steven Adams',
				pointGuard: 'Russel Westbrook',
				shootingGuard: 'Dion Waiters',
				smallForward: 'Kevin Durant'
			}
		},
		{
			teamName: 'Magic',
			city: 'Orlando',
			logo: 'images/magic-logo.gif',
			wins: 25,
			losses: 31,
			percent: .446,
			homeWins: 15,
			homeLosses: 15,
			roadWins: 10,
			roadLosses: 16,

			startingFive: {
				powerForward: 'Aaron Gordon',
				center: 'Nikola Vucevic',
				pointGuard: 'Elfrid Payton',
				shootingGuard: 'Victor Oladipo',
				smallForward: 'Evan Fournier'
			}
		},
		{
			teamName: '76ers',
			city: 'Philadelphia',
			logo: 'images/76ers-logo.gif',
			wins: 8,
			losses: 49,
			percent: .140,
			homeWins: 5,
			homeLosses: 22,
			roadWins: 3,
			roadLosses: 27,

			startingFive: {
				powerForward: 'Nerlens Noel',
				center: 'Jahlil Okafor',
				pointGuard: 'Ish Smith',
				shootingGuard: 'Nik Stauskas',
				smallForward: 'Robert Covington'
			}
		},
		{
			teamName: 'Suns',
			city: 'Phoenix',
			logo: 'images/suns-logo.gif',
			wins: 14,
			losses: 44,
			percent: .241,
			homeWins: 10,
			homeLosses: 21,
			roadWins: 4,
			roadLosses: 23,

			startingFive: {
				powerForward: 'Mirza Teletovic',
				center: 'Alex Len',
				pointGuard: 'Ronnie Price',
				shootingGuard: 'Devin Booker',
				smallForward: 'P.J. Tucker'
			}
		},
		{
			teamName: 'Trail Blazers',
			city: 'Portland',
			logo: 'images/blazers-logo.gif',
			wins: 30,
			losses: 28,
			percent: .517,
			homeWins: 19,
			homeLosses: 12,
			roadWins: 11,
			roadLosses: 16,

			startingFive: {
				powerForward: 'Noah Vonleh',
				center: 'Mason Plumlee',
				pointGuard: 'Damian Lillard',
				shootingGuard: 'C.J. McCollum',
				smallForward: 'Al-Farouq Aminu'
			}
		},
		{
			teamName: 'Kings',
			city: 'Sacremento',
			logo: 'images/kings-logo.gif',
			wins: 24,
			losses: 32,
			percent: .429,
			homeWins: 14,
			homeLosses: 14,
			roadWins: 10,
			roadLosses: 18,

			startingFive: {
				powerForward: 'Willie-Cauley Stein',
				center: 'DeMarcus Cousins',
				pointGuard: 'Rajon Rondo',
				shootingGuard: 'Ben McLemore',
				smallForward: 'Rudy Gay'
			}
		},
		{
			teamName: 'Spurs',
			city: 'San Antonio',
			logo: 'images/spurs-logo.gif',
			wins: 49,
			losses: 9,
			percent: .845,
			homeWins: 29,
			homeLosses: 0,
			roadWins: 20,
			roadLosses: 9,

			startingFive: {
				powerForward: 'LaMarcus Aldridge',
				center: 'Tim Duncan',
				pointGuard: 'Tony Parker',
				shootingGuard: 'Danny Green',
				smallForward: 'Kawhi Leonard'
			}
		},
		{
			teamName: 'Raptors',
			city: 'Toronto',
			logo: 'images/raptors-logo.gif',
			wins: 38,
			losses: 18,
			percent: .679,
			homeWins: 20,
			homeLosses: 6,
			roadWins: 18,
			roadLosses: 12,

			startingFive: {
				powerForward: 'Pattrick Patterson',
				center: 'Jonas Valunciunas ',
				pointGuard: 'Kyle Lowry',
				shootingGuard: 'DeMar Derozan',
				smallForward: 'Terrance Ross'
			}
		},
		{
			teamName: 'Jazz',
			city: 'Utah',
			logo: 'images/jazz-logo.gif',
			wins: 28,
			losses: 29,
			percent: .491,
			homeWins: 19,
			homeLosses: 11,
			roadWins: 9,
			roadLosses: 18,

			startingFive: {
				powerForward: 'Derrick Favors',
				center: 'Rudy Gobert',
				pointGuard: 'Shelvin Mack',
				shootingGuard: 'Rodney Hood',
				smallForward: 'Jeff Gordon'
			}
		},
		{
			teamName: 'Wizards',
			city: 'Washington',
			logo: 'images/wizards-logo.gif',
			wins: 26,
			losses: 30,
			percent: .464,
			homeWins: 14,
			homeLosses: 16,
			roadWins: 12,
			roadLosses: 14,

			startingFive: {
				powerForward: 'Jared Dudley',
				center: 'Marcin Gortat',
				pointGuard: 'John Wall',
				shootingGuard: 'Bradley Beal',
				smallForward: 'Otto Porter'
			}
		},
		
		
	]
	
	this.getTeams = function() {
		return teams
	}
});