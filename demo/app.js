var app = angular.module('App', [
  'pplm'
]);

app.controller('BaseCtrl', function($scope) {
  'use strict';

  $scope.myName = 'Scott';
});
