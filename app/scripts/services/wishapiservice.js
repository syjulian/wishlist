'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.wishApiService
 * @description
 * # wishApiService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp')
  .factory('wishApiService', function () {
      var _wishes = [];
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
    			imageUrl: 'pumpkin.jpg',
    			comments: null, // to be filled out by admin upon status change
    			cost: 14.99
    		}
    	];
        // TODO pull from backend
      };

      syncWishes();

      return {
          wishes:  _wishes,
          syncWishes: syncWishes
      };
  });
