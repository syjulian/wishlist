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
	
	var createWish = function(wish) {
		return $http({
			method : 'POST',
			url : '/createWish',
			data : wish
		});
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

	var updateWish = function(wish) {
		$log.info('sending update of ', wish);
		// TODO send POST/PUT to change wish
	};

	var syncVotes = function(){
		$http.get(baseUrl+'/get_vote')
		.then(function(res){
			for(var i in res.data){
				_votes.push(res.data[i]);
			}
		}, function(err){
			return err;
		})
	}

	var getVotesByUser = function(attuid){
		$http.get(baseUrl+'/get_vote?user_id='+attuid)
		.then(function(res){
			for(var i in res.data){
				_votes.push(res.data[i]);
			}
		}, function(err){
			return err;
		});
	}

	var getVoteByWishAndUser = function(wish_id, attuid){
		$http.get(baseUrl+'/get_vote?wish_id='+wish_id+'&user_id='+attuid)
		.then(function(res){
			_vote = res.data[0];
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

	var updateStatus = function(wish, new_status, new_comments){
		$http.put(baseUrl+'/status', {wish_id: wish.wish_id, new_comment: wish.comments, new_status: wish.status})
		.then(function(res){
			console.log('success');
		}, function(err){
			return err;
		})
	}

	syncWishes();
	// syncVotes();

	return {
		wishes : _wishes,
		votes : _votes,
		createWish : createWish,
		syncWishes : syncWishes,
		updateWish : updateWish,
		syncVotes : syncVotes,
		getVotesByUser : getVotesByUser,
		getVoteByWishAndUser : getVoteByWishAndUser,
		updateCrowdfund : updateCrowdfund,
		updateStatus : updateStatus
	};
});
