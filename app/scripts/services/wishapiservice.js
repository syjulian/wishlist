'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.wishApiService
 * @description
 * # wishApiService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp')
  .factory('wishApiService', function ($http) {
      var _wishes = [];
      var createWish = function(wish) {
		console.log("creating wish")
		console.log(wish)
                $http({
  			method: 'POST',
  			url: '/createWish',
                        data: wish
		}).then(function successCallback(response) {
    			alert("WE DID IT!")
  		}, function errorCallback(response) {
    			alert("oh no, there was an error")
  		});
      };
      var syncWishes = function() {
      	_wishes = [
  		    {
      			requestor: 'Josh',
    			name: 'Game Sphere',
    			url: 'gamesphere.com',
    			reason: 'no reason at all',
    			score: 100,
    			status: 'pending', // admin can change to {'approved','rejected','crowd'}
    			liked: false,
    			description: 'It\s spherical!',
    			imageUrl: 'https://media.tenor.co/images/04631b0f77251af5e7dafe0b3a061724/raw',
    			comments: null, // to be filled out by admin upon status change
    			cost: 514.99
    		},
    		{
    			requestor: 'Drake',
    			name: 'Pumpkins',
    			url: 'pumpkins.com',
    			reason: 'I\'m hungry',
    			score: 4,
    			status: 'pending', // admin can change to {'approved','rejected','crowd'}
    			liked: false,
    			description: 'Pumpkins are so yummy!',
    			imageUrl: 'pumpkin.jpg',
    			comments: null, // to be filled out by admin upon status change
    			cost: 14.99
    		},
    		{
    			requestor: 'Josh',
    			name: 'Pumpkins',
    			url: 'pumpkins.com',
    			reason: 'I\'m hungry',
    			score: 5,
    			status: 'pending', // admin can change to {'approved','rejected','crowd'}
    			liked: false,
    			description: 'Pumpkins are so yummy!',
    			imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/0a/a7/8a/0aa78af25e114836e1a42585fb7b09ed.jpg',
    			comments: null, // to be filled out by admin upon status change
    			cost: 14.99
    		}
    	];
        // TODO pull from backend
      };

      syncWishes();

      return {
          wishes:  _wishes,
          createWish: createWish,
          syncWishes: syncWishes
      };
  });
