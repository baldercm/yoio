'use strict';

angular.module('yoioGrade', [
  'ngResource'
])

.factory('Grade', ['$resource',
  function($resource) {
    return $resource('api/grades/:gradeId', {}, {
      get:   {method:'GET', url: 'api/grade.json'},
      query: { method:'GET', isArray: true, url: 'api/grades.json'}
    });
  }])

.controller('GradeListCtrl', ['$scope', 'Grade',
  function($scope, Grade) {
    $scope.grades = Grade.query();
  }])

.controller('GradeDetailCtrl', ['$scope', '$stateParams', 'Grade',
  function($scope, $stateParams, Grade) {
    $scope.data = {
      id: $stateParams.id
    };
    $scope.grade = Grade.get();
  }]);
