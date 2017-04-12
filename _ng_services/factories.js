
//	============================================================================
//	============================================================================

// 	Factory Declarations
	
	var factories = {};


// 	Factory Definitions
	
	factories.factoryDB = function ($http, $q) {
		var factoryDB = {};
		factoryDB.getFactoryData = function (d) { return $http.get(d) };
		return factoryDB;
	};

	
//  Factory Call
	
	testApp.factory(factories);


//	============================================================================
//	============================================================================
