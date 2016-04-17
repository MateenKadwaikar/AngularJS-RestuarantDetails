'use strict';
/**
 * datFactory Module
 *
 * Description
 */
RestaurantsDetails.factory('dataFactory', ['$http','$q',
	function($http,$q) {
        var dataFactory = {};
        dataFactory.getRestaurantsDetails = function() {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'RestaurantsDetails.json',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).success(function(data) {
                    d.resolve(data);
                })
                .error(function(e, f) {
                    d.reject(e);
                })
            return d.promise;
        }
        	return dataFactory;
    }
])