'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $location) {
   	$scope.hipchatLinks = hipchatLinks;

   	$scope.tags = ["JavaScript", "HTML", "CSS", "AngularJS", "Ruby"];


   	// $scope.selectCategory = function (value) {
   		// $location.path ('/categories');

   		// $rootScope.selection = value;
   	});
