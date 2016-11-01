'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishdetailsCtrl
 * @description
 * # WishdetailsCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('WishdetailsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.wish=
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
  });
