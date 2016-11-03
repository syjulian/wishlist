'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:MakewishCtrl
 * @description
 * # MakewishCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp').controller('MakewishCtrl', ['$scope', '$location', '$window', '$log', 'wishApiService',
function($scope, $location, $window, $log, wishApiService) {

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
			$scope.wish.user = 'DEFAULT USER';
			$scope.wish.status = 'pending';
			$log.info('creating wish: ', $scope.wish);
			wishApiService.createWish($scope.wish).then(function successCallback(response) {
				$log.info('Successfully created wish: ', response);
			}, function errorCallback(response) {
				$log.error('Error creating wish: ', response);
			});
		} else {
			$window.scrollTo(0, 0);
		}
	};
}]);
