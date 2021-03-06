(function(){
	'use strict';
	angular.module('moneyMarketApp')
		.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){

			$urlRouterProvider.otherwise('/index');
			
			$stateProvider.state('app',{
				abstract : true,
				templateUrl : 'app/app.html'
			});

		}]);
})();
(function(){
	'use strict';

	angular.module('moneyMarketApp')
		.config(['$stateProvider', function($stateProvider){

			$stateProvider.state('app.main',{
				url : '/index',
				views : {
					'tabs' : {
						templateUrl : 'app/main/tabs-view/index.html'
					},
					'filter' : {
						templateUrl : 'app/main/filter-view/index.html'
					},
					'matrix' : {
						templateUrl : 'app/main/matrix-view/index.html'
					},
					'table' : {
						templateUrl : 'app/main/table-view/index.html'
					}
				},
				resolve : {
					load : function(){
						console.log('load');
					}
				}
			});

		}]);

})();