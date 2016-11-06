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
    	setVote: function(wish, attuid, votes) {
    		for(var i in votes){
                if(votes[i].wish_id == wish.wish_id && votes[i].user_id == attuid){
                    vote = votes[i];
                    score = wish.score;
                    return;
                }
            }
            vote = {
                wish_id: wish.wish_id,
                user_id: attuid,
                voted: 0
            };
            score = wish.score;
    	},
        toggleVote: function(wish){
            if(vote.voted === 1) {
                vote.voted = 0;
                wish.score--;
                score = wish.score;
            } else {
                vote.voted = 1;
                wish.score++;
                score = wish.score;
            }
        },
        getScore: function(){
            return score;
        },
        setScore: function(changeScore){
            score = chnageScore;
        }
    };  
  });