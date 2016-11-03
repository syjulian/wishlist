'use strict';

/**
 * @ngdoc overview
 * @name wishlistApp
 * @description
 * # wishlistApp
 *
 * Main module of the application.
 */
angular
  .module('wishlistApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/makeWish', {
        templateUrl: 'views/makewish.html',
        controller: 'MakewishCtrl',
        controllerAs: 'makeWish'
      })
      .when('/wishlist', {
        templateUrl: 'views/wishlist.html',
        controller: 'WishlistCtrl',
        controllerAs: 'wishlist'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/wishDetails', {
        templateUrl: 'views/wishdetails.html',
        controller: 'WishdetailsCtrl',
        controllerAs: 'wishDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, localStorage) {
    $rootScope.isLoggedIn = false;
    $rootScope.server = "http://wishlist-backend.herokuapp.com/"

    $rootScope.$watch(function() {
      return localStorage.get('user');
    }, function(newValue) {
      if (newValue) {
        $rootScope.isLoggedIn = true;
      }
    }, true);

    $rootScope.logout = function() {
      localStorage.clearAll();
      $rootScope.isLoggedIn = false;
      $location.path('/login');
    }
  }).factory('localStorage', ['localStorageService',
    function(localStorageService) {
    var myLocalStorage = {};

    myLocalStorage.get = function(key) {
        return localStorageService.get(key);
    };

    myLocalStorage.set = function(key, val) {
        return localStorageService.set(key, val);
    };

    myLocalStorage.clearAll = function() {
        localStorageService.clearAll();
    };

    return myLocalStorage;
}]);
