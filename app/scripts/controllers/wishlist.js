'use strict';

/**
 * @ngdoc function
 * @name wishlistApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the wishlistApp
 */
angular.module('wishlistApp')
  .controller('WishlistCtrl', function ($scope, wishApiService) {
      $scope.orderOpts = [
        {label: 'By name', val: 'name'},
        {label: 'Highest Score', val: '-score'},
        {label: 'Lower Score', val: 'score '}
      ];
      $scope.selectedOrder = null;
      $scope.wishes = wishApiService.wishes;

      $scope.onSortClick = function(opt) {
          $scope.selectedOrder = opt
      };
  });
