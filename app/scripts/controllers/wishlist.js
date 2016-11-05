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
                                        wishApiService, selectedWishService, voteService) {
      $scope.statusSelect = '';
      $scope.orderSelect = 'name';

      $scope.statusFilter = function(wish) {
		return !$scope.statusSelect || wish.status === $scope.statusSelect;
	  };

      $scope.wishes = wishApiService.wishes;
      // wishApiService.syncVotes($scope.user.attuid);
      wishApiService.syncVotes();
      $scope.votes = wishApiService.votes;

      $scope.onLikeClick = function(wish) {
          // voteService.toggleVote();
          wish.liked = !wish.liked;
          wishApiService.updateWish(wish);
      };

      $scope.selectWish = function(wish) {
        selectedWishService.setWish(wish);
        voteService.setVote(wish.wish_id, $scope.user.attuid, $scope.votes);
		selectedWishService.setBack('/wishlist');
		$location.path('/wishDetails');
	  };

  });
