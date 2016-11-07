'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:MakewishCtrl
 * @description
 * # MakewishCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp').controller('MakewishCtrl', ['$scope', '$location', '$window', '$log', 'wishApiService', '$route',
function($scope, $location, $window, $log, wishApiService, $route) {

	$scope.wish = null;
	$scope.errors = [];

	$scope.reasons = ['Improve productivity', 'Improve morale', 'Improve communication', 'Maintain existing service', 'Other'];
	$scope.categories = ['Item', 'Event', 'Process', 'Other'];

	$scope.submit = function() {
		$scope.errors = [];
		var valid = true;
		if (!$scope.wish) {
			valid = false;
			$scope.errors.push('You\'ve gotta give me something!');
		} else {
			if ($scope.makeWishForm.$error.required) {
				valid = false;
				$scope.errors.push('Please fill out all required fields!');
			}
		}
		if (valid) {
			$scope.wish.status = 'pending';
			$log.info('creating wish: ', $scope.wish);
			if($scope.wish.reason == "Other" && $scope.wish.otherReason != undefined){
				$scope.wish.reason = $scope.wish.otherReason;
			}
			wishApiService.createWish($scope.wish, $scope.user);
			$location.path('/wishlist');
		} else {
			$window.scrollTo(0, 0);
		}
	};
}]);
