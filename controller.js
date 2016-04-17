'use strict';

/**
 *  Module
 *
 * Description
 */
angular.module('RestaurantsDetails').
controller('RestaurantsController', ['$scope', 'dataFactory',
    function($scope, dataFactory) {
        dataFactory.getRestaurantsDetails().then(function(data) {
        	console.log(data.restaurantDetails);
        	$scope.details = data.restaurantDetails;
        });
    }
])