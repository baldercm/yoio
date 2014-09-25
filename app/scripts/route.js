'use strict';

angular.module('yoioApp')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('grade', {
      abstract: true,
      url: '/grades',
      templateUrl: 'views/grades.html'
    })
    .state('grade.list', {
      url: '/list',
      views: {
        'gradesView': {
          templateUrl: 'views/grades.list.html',
          controller: 'GradeListCtrl'
        }
      }
    })
    .state('grade.detail', {
      url: '/:id',
      views: {
        'gradesView': {
          templateUrl: 'views/grades.detail.html',
          controller: 'GradeDetailCtrl'
        },
        'studentsView@grade.detail': {
          templateUrl: 'views/students.list.html',
          controller: 'StudentListCtrl'
        }
      }
    })
    .state('student', {
      abstract: true,
      url: '/students',
      templateUrl: 'views/students.html'
    })
    .state('student.list', {
      url: '/list',
      views: {
        'studentsView': {
          templateUrl: 'views/students.list.html',
          controller: 'StudentListCtrl'
        }
      }
    })
    .state('student.detail', {
      url: '/:id',
      views: {
        'studentsView': {
          templateUrl: 'views/students.detail.html',
          controller: 'StudentDetailCtrl'
        }
      }
    })
    .state('preferences', {
      url: '/preferences',
      templateUrl: 'views/preferences.html'
    });

    $urlRouterProvider.otherwise('/grades/list');
  }]);
