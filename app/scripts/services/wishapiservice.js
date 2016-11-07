'use strict';

/**
 * @ngdoc service
 * @name wishlistApp.wishApiService
 * @description
 * # wishApiService
 * Service in the wishlistApp.
 */
angular.module('wishlistApp').factory('wishApiService', function($http, $log) {
	var baseUrl = "http://127.0.0.1:3000";
	var _wishes = [];
	var _votes = [];
	
	var createWish = function(wish, user) {
		$http({
			method: 'POST',
			url: baseUrl+'/create_wish',
			data: {
				name: wish.name,
				imageUrl: wish.imageUrl,
				url: wish.url,
				cost: wish.cost,
				category: wish.category,
				reason: wish.reason,
				description: wish.description,
				requester: user.attuid
			},
			headers: {'Content-Type': 'application/json'}
		})
		.then(function(res){
			console.log('success');
			_wishes=[];
			syncWishes();
		}, function(err){
			return err;
		})
	};
	var syncWishes = function() {
		$http.get(baseUrl+'/get_wish').then(function(response){
			for(var i in response.data){
				_wishes.push(response.data[i]);
			}
			// return response.data;
		}, function(err){
			return err;
		});

	};

	var updateScore = function(wish) {
		$http.put(baseUrl+'/update_score', {wish_id: wish.wish_id, score: wish.score} )
		.then(function(res){
			console.log('success');
			_wishes=[];
			syncWishes();
		}, function(err){
			return err;
		})
	};

	//get all votes
	var syncVotes = function(){
		// _votes=[];
		$http.get(baseUrl+'/get_vote')
		.then(function(res){
			for(var i in res.data){
				_votes.push(res.data[i]);
			}
			console.log('get all votes');
		}, function(err){
			return err;
		})
	}

	var getVotesByUser = function(attuid){
		// _votes = [];
		$http.get(baseUrl+'/get_vote?user_id='+attuid)
		.then(function(res){
			for(var i in res.data){
				_votes.push(res.data[i]);
			}
			console.log('get votes by user');
		}, function(err){
			return err;
		});
	}

	var getVoteByWish = function(wish_id){
		// _votes = []
		$http.get(baseUrl+'/get_vote?wish_id='+wish_id)
		.then(function(res){
			for(var i in res.data){
				_votes.push(res.data[i]);
			}
			console.log('get votes by wish');
		}, function(err){
			return err;
		})
	}

	var getVoteCountByWish = function(wish_id){
		getVoteByWish(wish_id);
		return _votes.length;
	}

	var getVoteByWishAndUser = function(wish_id, attuid){
		$http.get(baseUrl+'/get_vote?wish_id='+wish_id+'&user_id='+attuid)
		.then(function(res){
			_vote = res.data[0];
		}, function(err){
			console.log('error: ');
		});
	}

	var updateCrowdfund = function(wish, donation){
		$http.put(baseUrl+'/crowd_fund', {wish_id: wish.wish_id, contribution: donation})
		.then(function(res){
			console.log('success!')
		}, function(err){
			return err;
		});
	}

	var updateStatus = function(wish){
		$http.put(baseUrl+'/status_update', {wish_id: wish.wish_id, comment: wish.comments, status: wish.status})
		.then(function(res){
			console.log('success');
		}, function(err){
			return err;
		})
	}

	var addVote = function(vote){
		console.log(vote);
		$http.post(baseUrl+'/vote', {wish_id: vote.wish_id, user_id: vote.user_id, voted: vote.voted})
		.then(function(res){
			console.log('success');
			_votes = [];
			syncVotes();
		}, function(err){
			return err;
		})
	}

	syncWishes();
	syncVotes();
	// getVoteByWish();

	return {
		wishes : _wishes,
		votes : _votes,
		createWish : createWish,
		syncWishes : syncWishes,
		// updateWish : updateWish,
		syncVotes : syncVotes,
		getVotesByUser : getVotesByUser,
		getVoteByWishAndUser : getVoteByWishAndUser,
		updateCrowdfund : updateCrowdfund,
		updateStatus : updateStatus,
		addVote : addVote,
		updateScore : updateScore
	};
});
