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
                                        wishApiService, selectedWishService, voteService, crowdfundService) {
      $scope.statusSelect = '';
      $scope.orderSelect = 'name';

      $scope.statusFilter = function(wish) {
		return !$scope.statusSelect || wish.status === $scope.statusSelect;
	  };

      $scope.wishes = wishApiService.wishes;
      $scope.votes = wishApiService.votes;

      $scope.onLikeClick = function(wish, index) {
          voteService.setVote(wish, $scope.user.attuid, $scope.votes);
          $scope.vote = voteService.getVote();
          voteService.toggleVote(wish);
          wishApiService.addVote($scope.vote, voteService.getScore);
			    wishApiService.updateScore(wish);
          $scope.wishes[index].liked = voteService.getVote().voted === 1? true:false;
      };

      $scope.selectWish = function(wish) {
        selectedWishService.setWish(wish);
        voteService.setVote(wish, $scope.user.attuid, $scope.votes);
        $scope.vote = voteService.getVote();
        crowdfundService.setFund(wish.crowd_source);

		selectedWishService.setBack('/wishlist');
		$location.path('/wishDetails');
	  };

  });
