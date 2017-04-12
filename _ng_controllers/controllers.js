
//	============================================================================
//	============================================================================

// Controller Declarations
	
	var controllers = {};


// Controller Definitions

	// this is simple text controller
	controllers.textController = function( $scope ) {
		$scope.hello = "Yo!";
		$scope.item = {
			name : "AngularJS",
			description : "is, awesome"
		};
	};


	// this is the controller that fetches URL
	controllers.urlController = function( $scope, $location ) {
		$scope.absUrl = $location.absUrl();
	};


	// this is the controller that fetches API data
	controllers.ajaxController = function ($scope, factoryDB) {
		$scope.apiData = [{
			name: 'Loading...',
			description: 'Loading...',
			owner: {
				login: 'Loading...',
				type: 'Loading...'
			} 
		}];
		var apiPath = 'https://api.github.com/repositories?since=862';
		getFactoryData(apiPath);
	    $scope.boom = function(a) {
	        factoryDB.getFactoryData(a)
            .success(function (factorydata, status, headers, config) {	
				$scope.nextLink = headers()['link'].split('>')[0].split('<')[1];
				var index = $($scope.apiData).toArray().length;
				$.each(factorydata, function() {
				    $scope.apiData[index] = {
				    	name : this.name,
				    	owner: {
				    		avatar_url : this.owner.avatar_url,
				    		login : this.owner.login,
				    		type : this.owner.type
				    	},
				    	description : this.description,
				    };
				    index++;
				});
            })
            .error(function (error) {
                $scope.apiData = 'Unable to load data: ' + error.message;
            });
	    }

	    function getFactoryData(d) {
	        factoryDB.getFactoryData(d)
            .success(function (factorydata, status, headers, config) {
				$scope.nextLink = headers()['link'].split('>')[0].split('<')[1];
                $scope.apiData = factorydata;
            })
            .error(function (error) {
                $scope.apiData = 'Unable to load data: ' + error.message;
            });
	    }
	};


//  Controller Call
	
	testApp.controller(controllers);


//	============================================================================
//	============================================================================
