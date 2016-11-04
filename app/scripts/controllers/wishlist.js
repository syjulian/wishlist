'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('WishlistCtrl', function ($scope, $location, 
                                        wishApiService, selectedWishService) {
      $scope.statusSelect = '';
      $scope.orderSelect = 'name';

      $scope.statusFilter = function(wish) {
		return !$scope.statusSelect || wish.status === $scope.statusSelect;
	  };

      $scope.wishes = wishApiService.wishes;

      $scope.onLikeClick = function(wish) {
          wish.liked = !wish.liked;
          wishApiService.updateWish(wish);
      };

      $scope.selectWish = function(wish) {
        selectedWishService.setWish(wish);
		selectedWishService.setBack('/wishlist');
		$location.path('/wishDetails');
	  };

  });
