'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope, $routeParams) {
    $scope.hipchatLinks = hipchatLinks;

    // console.log()
    console.log("$routeParams success?"); 
	console.log($routeParams.selectedTagInUrl);

	$scope.selectedTagThroughRoute = $routeParams.selectedTagInUrl;


  });






 