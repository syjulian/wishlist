'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.crowdfundService
 * @description
 * # crowdfundService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp')
  .service('crowdfundService', function () {
    var fund = null;
    return {
    	getFund: function() {
    		return fund;
    	},
    	updateFund: function(amount) {
            fund += amount;
        },
        setFund: function(amount) {
            fund = amount;
        }
    };  
  });