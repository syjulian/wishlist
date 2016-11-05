'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishdetailsCtrl
 * @description
 * # WishdetailsCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp').controller('WishdetailsCtrl', ['$scope', '$location', 'wishApiService', 'selectedWishService', 'voteService',
function($scope, $location, wishApiService, selectedWishService, voteService) {
	$scope.wish = selectedWishService.getWish();
	$scope.vote = voteService.getVote();
	console.log($scope.vote);

	var calledFrom = selectedWishService.getBack();
	if (calledFrom === '/admin') {
		$scope.isAdmin = true;
	} else if (calledFrom === '/wishlist') {
		$scope.isAdmin = false;
	}
	$scope.isCrowd = ($scope.wish.status === 'crowd');

	$scope.goBack = function() {
		$location.path(selectedWishService.getBack());
	};

	$scope.clickedHeart = function() {
		voteService.toggleVote();
	};

	$scope.donateMoney = function() {

		$scope.donation = $scope.wish.cost - $scope.wish.raised;
		if ($scope.wish.cost > $scope.wish.raised) {
			$scope.showInput = true;
		} else {
			$scope.showInput = false;
		}
	};

	$scope.cancel = function() {
		$scope.showInput = false;
		$scope.donation = 0;
	};

	$scope.submit = function() {
		if (isNaN($scope.donation)) {
			$scope.donation = 0;
			return;
		}
		if ($scope.donation > 0) {
			$scope.wish.raised = $scope.wish.raised + $scope.donation;
			$scope.showInput = false;
			$scope.donation = 0;
			$scope.donated = true;
		}
	};

	$scope.toApprove = function() {
		$scope.newStatus = 'approved';
		$scope.btnText = 'Approve';
		$scope.showFeedback = true;
	};
	$scope.toReject = function() {
		$scope.newStatus = 'rejected';
		$scope.btnText = 'Reject';
		$scope.showFeedback = true;
	};
	$scope.toCrowd = function() {
		$scope.newStatus = 'crowd';
		$scope.btnText = 'Crowd Source';
		$scope.showFeedback = true;
		$scope.wish.raised = 0;
	};

	$scope.submitFeedback = function(){
		console.log($scope.newComments);
		// TODO: Call API to udpate wish
		$scope.wish.status = $scope.newStatus;
		$scope.wish.comments = $scope.newComments;
		$scope.showFeedback = false;
	};
}]);
