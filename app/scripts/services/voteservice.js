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
    	setVote: function(wish_id, attuid, votes) {
    		for(var i in votes){
                if(votes[i].wish_id == wish_id && votes[i].user_id == attuid){
                    vote = votes[i];
                    return;
                }
            }
    	},
        setScore: function(score){
            if (vote.voted === 1) this.score = score++;
            else if( vote.voted === 0) this.score = score--;
        },
        getScore: function(){
            return score;
        },
        toggleVote: function(){
            if(vote.voted === 1) vote.voted = 0;
            else vote.voted = 1;
        }
    };  
  });