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
  		password: null
  	};

    $scope.login = function() {
    	$http({
    		method: 'POST',
    		url: $scope.server + 'get_or_create_user/',
    		data: {
    			attuid: $scope.form.attuid,
    			password: $scope.form.password
    		}
    	}).then(function successCallback(response) {
    		localStorage.set('user', response['data']);
    		$location.path('/wishlist');
    	}, function errorCallback(response) {
    		alert('error: ' + JSON.stringify(response));
    	});
    };
  });
