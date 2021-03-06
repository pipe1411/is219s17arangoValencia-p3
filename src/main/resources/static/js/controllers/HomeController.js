app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '09', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '02', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '11', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '06', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1994', '01', '04'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
        {

            title:	'Man On Fire',
            iscore:	7.7,
            rating:	'R',
            runtime:	146,
            released:	new Date('2004', '03', '23'),
            country:	'USA',
            posters:	['img/manonfire_1.jpg','img/manonfire_2.jpg'],
            imdb:		'http://www.imdb.com/title/tt0328107',
            website:	'https://www.facebook.com/manonfiremovie/',
            likes:	2004,
            dislikes:	23,
            posterindex: 0
        },

        {
            title:	'The Goonies',
            iscore:	7.8,
            rating:	'PG',
            runtime:	114,
            released:	new Date('1985', '05', '07'),
            country:	'USA',
            posters:	['img/thegoonies_1.jpg','img/thegoonies_3.jpg'],
            imdb:		"http://www.imdb.com/title/tt0089218/",
            website:	'https://www.facebook.com/thegooniesmovie/',
            likes:	1985,
            dislikes:	7,
            posterindex: 0
        },

        {
            title:	'Little Boy',
            iscore:	7.4,
            rating:	'PG-13',
            runtime:	106,
            released:	new Date('2015', '3', '24'),
            country:	'USA',
            posters:	['img/little_boy1.jpg','img/little_boy2.jpg'],
            imdb:		'http://www.imdb.com/title/tt1810683/',
            website:	'http://littleboyresources.com/',
            likes:	2015,
            dislikes:	24,
            posterindex: 0
        },
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = 'IMDB + Andres\'s Top 8 Movies';
	$scope.owner = "Andres";
	$scope.github = "https://github.com/pipe1411/is219s17arangoValencia-p3.git";
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index) {
        $scope.movies[index].likes+=1;
    };

	$scope.dislike = function(index) {
	    $scope.movies[index].dislikes-=1;
    }

    $scope.posterClick = function(index) {
	    if($scope.movies[index].posterindex == ($scope.movies[index].posters.length-1)) {
            $scope.movies[index].posterindex = 0;
        } else {
	        $scope.movies[index].posterindex+=1;
        }
    }
    
    $scope.timeText = function (minutes) {
	    var hours = Math.floor(minutes/60);
	    var minutes = minutes%60;
	    return hours + "h" + " " + minutes+"m";
	}

	$scope.currentImageCount = function(index) {
	    return $scope.movies[index].posterindex+1;
    }

    $scope.totalImages = function(index) {
	    return $scope.movies[index].posters.length;
    }
		
	
	
	
	
	
	
	
	
}]);
