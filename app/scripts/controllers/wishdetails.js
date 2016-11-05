'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishdetailsCtrl
 * @description
 * # WishdetailsCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp').controller('WishdetailsCtrl', ['$scope', '$location', 'wishApiService', 'selectedWishService',
function($scope, $location, wishApiService, selectedWishService) {
	$scope.wish = selectedWishService.getWish();
	console.log($scope.wish);
	
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
	console.log($scope.isAdmin+":"+$scope.isCrowd);
	$scope.clickedHeart = function() {

		var liked = $scope.wish.liked;
		$scope.wish.liked = !$scope.wish.liked;
		if (liked) {
			$scope.wish.score -= 1;
		} else {
			$scope.wish.score += 1;
		}
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
