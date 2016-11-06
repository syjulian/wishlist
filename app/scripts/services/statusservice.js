'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.statusService
 * @description
 * # statusService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp')
  .service('statusService', function () {
    var status = null;
    var comments = null;
    return {
    	getStatus: function() {
    		return status;
    	},
        setStatus: function(new_status) {
            status = new_status;
        },
        setComment: function(comment){
            comments = comment;
        },
        getComment: function(){
            return comments;
        }
    };  
  });