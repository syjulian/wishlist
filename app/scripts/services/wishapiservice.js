'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.wishApiService
 * @description
 * # wishApiService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp').factory('wishApiService', function($http, $log) {
	var _wishes = [];
	var createWish = function(wish) {
		return $http({
			method : 'POST',
			url : '/createWish',
			data : wish
		});
	};
	var syncWishes = function() {
		_wishes = [{
			requestor : 'Josh',
			name : 'Game Sphere',
			url : 'gamesphere.com',
			reason : 'no reason at all',
			score : 100,
			status : 'pending', // admin can change to {'approved','rejected','crowd'}
			liked : false,
			description : 'It\s spherical!',
			imageUrl : 'https://media.tenor.co/images/04631b0f77251af5e7dafe0b3a061724/raw',
			comments : null, // to be filled out by admin upon status change
			cost : 514.99
		}, {
			requestor : 'Tommy',
			name : 'Rugrats Season 1 DVD',
			url : 'https://www.amazon.com/Rugrats-Season-Disc-Melanie-Chartoff/dp/B00264H48O',
			reason : 'Nostalgia feels',
			score : 300,
			status : 'pending',
			liked : false,
			description : 'What\'s better than a clean diapee and a fresh bottle? How about the first-ever, 25-episode, 4-disc set of the complete First Season of Rugrats! It\'s Tommy, Angelica, Chuckie and the rest of the gang, taking you on adventures from the ground up.',
			imageUrl : 'https://images-na.ssl-images-amazon.com/images/I/51GaL5wlh8L.jpg',
			comments : null,
			cost : 13.29
		}, {
			requestor : 'Josh',
			name : 'Pumpkins',
			url : 'pumpkins.com',
			reason : 'I\'m hungry',
			score : 25,
			status : 'approved', // admin can change to {'approved','rejected','crowd'}
			liked : false,
			description : 'Pumpkins are so yummy!',
			imageUrl : 'http://healthyrise.com/wp-content/uploads/2016/09/Pumpkin-5.gif',
			comments : null, // to be filled out by admin upon status change
			cost : 14.99
		}, {
			requestor : 'Josh',
			name : 'Pumpkins',
			url : 'pumpkins.com',
			reason : 'I\'m hungry',
			score : 5,
			status : 'rejected', // admin can change to {'approved','rejected','crowd'}
			liked : false,
			description : 'Pumpkins are so yummy!',
			imageUrl : 'http://healthyrise.com/wp-content/uploads/2016/09/Pumpkin-5.gif',
			comments : null, // to be filled out by admin upon status change
			cost : 14.99
		}, {
			requestor : 'Josh',
			name : 'Pumpkins',
			url : 'pumpkins.com',
			reason : 'I\'m hungry',
			score : 5,
			status : 'crowd', // admin can change to {'approved','rejected','crowd'}
			liked : false,
			description : 'Pumpkins are so yummy!',
			imageUrl : 'http://healthyrise.com/wp-content/uploads/2016/09/Pumpkin-5.gif',
			comments : null, // to be filled out by admin upon status change
			cost : 14.99,
			raised : 10.99,
			donated: false
		}];
		// TODO pull from backend
	};

	var updateWish = function(wish) {
		$log.info('sending update of ', wish);
		// TODO send POST/PUT to change wish
	};

	syncWishes();

	return {
		wishes : _wishes,
		createWish : createWish,
		syncWishes : syncWishes,
		updateWish : updateWish
	};
});
