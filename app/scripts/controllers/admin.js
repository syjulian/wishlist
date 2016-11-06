'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('AdminCtrl', function ($scope, $location, selectedWishService, wishApiService, statusService) {
	$scope.wishes = wishApiService.wishes;
	$scope.statusSelect = 'pending';
	
	$scope.statusFilter = function(wish) {
		if ($scope.statusSelect === 'popular') {
			return wish.status === 'pending' && wish.score > 20;
		}
		return !$scope.statusSelect || wish.status === $scope.statusSelect;
	};
	
	$scope.selectWish = function(wish) {
		selectedWishService.setWish(wish);
		selectedWishService.setBack('/admin');
		statusService.setStatus(wish.status);
		$location.path('/wishDetails');
	};
});
