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
      $scope.orderOpts = [
        {label: 'By name', val: 'name'},
        {label: 'Highest Score', val: '-score'},
        {label: 'Lower Score', val: 'score '}
      ];
      $scope.selectedOrder = null;

      $scope.wishes = wishApiService.wishes;

      $scope.onSortClick = function(opt) {
          $scope.selectedOrder = opt;
      };

      $scope.onLikeClick = function(wish) {
          wish.liked = !wish.liked;
          // TODO update backend
      };

      $scope.selectWish = function(wish) {
        selectedWishService.setWish(wish);
		selectedWishService.setBack('/wishlist');
		$location.path('/wishDetails');
	  };

  });
