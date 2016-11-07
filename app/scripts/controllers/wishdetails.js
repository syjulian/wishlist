'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishdetailsCtrl
 * @description
 * # WishdetailsCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp').controller('WishdetailsCtrl', ['$scope', '$location', 'wishApiService', 'selectedWishService',
	 'voteService', 'crowdfundService', 'statusService', '$route', function ($scope, $location, wishApiService, selectedWishService, voteService, crowdfundService, statusService, $route) {
		$scope.wish = selectedWishService.getWish();
		$scope.vote = voteService.getVote();
		$scope.wish.crowd_source = crowdfundService.getFund();

		var calledFrom = selectedWishService.getBack();
		if (calledFrom === '/admin') {
			$scope.isAdmin = true;
		} else if (calledFrom === '/wishlist') {
			$scope.isAdmin = false;
		}
		$scope.isCrowd = ($scope.wish.status === 'crowd');

		$scope.goBack = function () {
			$location.path(selectedWishService.getBack());
		};

		$scope.clickedHeart = function () {
			voteService.toggleVote($scope.wish);
			wishApiService.addVote($scope.vote, voteService.getScore);
			wishApiService.updateScore($scope.wish);
		};

		$scope.donateMoney = function () {
			$scope.donation = $scope.wish.cost - $scope.wish.crowd_source;
			if ($scope.wish.cost > $scope.wish.crowd_source) {
				$scope.showInput = true;
			} else {
				$scope.showInput = false;
			}
		};

		$scope.cancel = function () {
			$scope.showInput = false;
			$scope.donation = 0;
		};

		$scope.submit = function () {
			if (isNaN($scope.donation)) {
				$scope.donation = 0;
				return;
			}
			if ($scope.donation > 0) {				
				wishApiService.updateCrowdfund($scope.wish, $scope.donation);
				crowdfundService.updateFund($scope.donation)
				$scope.wish.crowd_source = crowdfundService.getFund();
					$scope.showInput = false;
					$scope.donation = 0;			
			}
		};

		$scope.toApprove = function () {
			$scope.newStatus = 'approved';
			$scope.btnText = 'Approve';
			$scope.showFeedback = true;
		};
		$scope.toReject = function () {
			$scope.newStatus = 'rejected';
			$scope.btnText = 'Reject';
			$scope.showFeedback = true;
		};
		$scope.toCrowd = function () {
			$scope.newStatus = 'crowd';
			$scope.btnText = 'Crowd Source';
			$scope.showFeedback = true;
			$scope.wish.crowd_source = 0;
		};

		$scope.submitFeedback = function () {
			statusService.setStatus($scope.newStatus);
			statusService.setComment($scope.newComments);
			$scope.wish.status = statusService.getStatus();
			$scope.wish.comments = statusService.getComment();
			wishApiService.updateStatus($scope.wish);
			$scope.showFeedback = false;
		};
	}]);
