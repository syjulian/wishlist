'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:MakewishCtrl
 * @description
 * # MakewishCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('MakewishCtrl',['$scope', '$location', 'wishApiService', function ($scope, $location, wishApiService) {
		
		$scope.wish = null

		$scope.submit = function(){
                        if($scope.wish){
                        	$scope.wish.user = "DEFAULT USER"
				$scope.wish.status = "new"
				wishApiService.createWish($scope.wish)
			} else {
				alert("You've gotta give me something")
			}
		};
  }]);
