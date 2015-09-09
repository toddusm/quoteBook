var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.quotes = dataService.getData();
	console.log($scope.quotes);
	$scope.addQuote = function(){dataService.addData($scope.addQuote)};
	$scope.removeQuote = function(){dataService.removeData($scope.removeItem)};
	$scope.filterQuote = function(){$scope.filterAuthor = $scope.filterName};
		
	
});