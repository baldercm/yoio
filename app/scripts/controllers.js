'use strict';

angular.module('yoioApp')
.controller('MainCtrl', ['$scope', '$ionicPopover',
  function($scope, $ionicPopover) {
    $ionicPopover.fromTemplateUrl('optionsPopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    $scope.$on('popover.hidden', function() {
      // Execute action
    });
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  }]);
