'use strict';

angular.module('yoioStudent', [
  'ngResource'
])

.factory('Student', ['$resource',
  function($resource) {
    return $resource('api/students/:studentId', {}, {
      get:   {method:'GET', url: 'api/student.json'},
      query: { method:'GET', isArray: true, url: 'api/students.json'}
    });
  }])

.controller('StudentListCtrl', ['$scope', 'Student',
  function($scope, Student) {
    $scope.students = Student.query();
  }])

.controller('StudentDetailCtrl', ['$scope', '$stateParams', 'Student',
  function($scope, $stateParams, Student) {
    $scope.data = {
      id: $stateParams.id,
    };
    $scope.student = Student.get();
  }]);
