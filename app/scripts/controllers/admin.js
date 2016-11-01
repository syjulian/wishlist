'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('AdminCtrl', function ($scope) {
	$scope.wishes = [
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
  		},
  		{
  			requestor: 'Josh',
  			name: 'Pumpkins',
  			url: 'pumpkins.com',
  			reason: 'I\'m hungry',
  			score: 5,
  			status: 'approved', // admin can change to {'approved','rejected','crowd'}
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
  			status: 'rejected', // admin can change to {'approved','rejected','crowd'}
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
  			status: 'crowd', // admin can change to {'approved','rejected','crowd'}
  			liked: false,
  			description: 'Pumpkins are so yummy!',
  			imageUrl: 'pumpkin.jpg',
  			comments: null, // to be filled out by admin upon status change
  			cost: 14.99
  		}
  });
