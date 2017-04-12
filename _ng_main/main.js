
//	============================================================================
//	============================================================================

//	Module Declarations 

	var testApp = angular.module("testApp", ['ngRoute']);

//	============================================================================
//	============================================================================

//	Routes 

	testApp.config( function ($routeProvider) {

		$routeProvider

			.when('/', {

				controller : 'textController',
				templateUrl : '/'

			})

			.otherwise({ redirectTo: '/' });

	} );

//	============================================================================
//	============================================================================

//	Filter Declarations 

	var filters = {};


//	Custom-filter Definitions 

	filters.subString = function () {

		return function(input, splitChar, splitIndex) {

	        // do some bounds checking here to ensure it has that index
	        
	        return input.split(splitChar)[splitIndex];

	    }
	};


//	Custom-filter Call 

	testApp.filter(filters);

//	============================================================================
//	============================================================================
