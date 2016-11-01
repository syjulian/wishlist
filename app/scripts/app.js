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
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
  });
