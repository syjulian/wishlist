'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('LoginCtrl', function ($scope, $http, $location, localStorage) {
  	$scope.form = {
  		attuid: null,
  		password: null,
  		error: null
  	};
  	$scope.defaultUsers = [];

    $scope.login = function() {
    	$http({
    		method: 'POST',
    		url: $scope.server + 'get_or_create_user/',
    		data: {
    			attuid: $scope.form.attuid,
    			password: $scope.form.password
    		}
    	}).then(function successCallback(response) {
    		var user = response.data;
    		if (user) {
    			localStorage.set('user', response.data);
    			$location.path('/wishlist');
  			} else {
  				$scope.form.error = 'Authentication failed.';
  			}
    	}, function errorCallback(response) {
    		$scope.form.error = JSON.stringify(response);
    	});
    };

    $scope.getDefaultUsers = function() {
    	$http({
    		method: 'GET',
    		url: $scope.server + 'get_default_users/'
    	}).then(function successCallback(response) {
    		$scope.defaultUsers = response.data;
    	}, function errorCallback(response) {
    		$scope.form.error = JSON.stringify(response);
    	});
    };

  	$scope.getDefaultUsers();
  });
