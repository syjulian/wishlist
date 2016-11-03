'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishdetailsCtrl
 * @description
 * # WishdetailsCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('WishdetailsCtrl', ['$scope', '$location', 'wishApiService', function ($scope, $location, wishApiService) {
		
		var selectedWish = 0;
		$scope.wish = wishApiService.wishes[selectedWish];

		$scope.goBack = function(){
			$location.path('/wishlist');
		};

		$scope.clickedHeart = function() {
			var liked = $scope.wish.liked;
			$scope.wish.liked = !$scope.wish.liked;
			if (liked) {
				$scope.wish.score -=1;
			} else {
				$scope.wish.score +=1;
			}
			console.log($scope.wish.score);
		};
  }]);
