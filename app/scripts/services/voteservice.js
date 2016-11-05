'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.voteService
 * @description
 * # voteService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp')
  .service('voteService', function () {
    var vote = null;
    var score = null;
    return {
    	getVote: function() {
    		return vote;
    	},
    	setVote: function(wishId, attuid, votes) {
    		for(var i in votes){
                if(votes[i].wish_id == wishId && votes[i].user_id == attuid){
                    vote = votes[i];
                    return;
                }
            }
            vote = {
                wish_id: wishId,
                user_id: attuid,
                voted: 0
            };
    	},
        toggleVote: function(wish){
            if(vote.voted === 1) {
                vote.voted = 0;
                wish.score--;
            } else {
                vote.voted = 1;
                wish.score++;
            }
        },
    };  
  });