'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.selectedWishService
 * @description
 * # selectedWishService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp')
  .service('selectedWishService', function () {
  	
    var wish = null;
    var back = null;
    
    return {
    	getWish: function() {
    		return wish;
    	},
    	setWish: function(newWish) {
    		wish = newWish;
    	},
    	getBack: function() {
    		return back;
    	},
    	setBack: function(prev) {
    		back = prev;
    	}
    };
    
  });
