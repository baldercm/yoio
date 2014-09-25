'use strict';

describe('StudentListCtrl', function () {

  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('yoioStudent'));

  var StudentListCtrl, scope, $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/students.json').
      respond([{ 'id': 0 }, { 'id': 0 }, { 'id': 2 }]);

    scope = $rootScope.$new();
    StudentListCtrl = $controller('StudentListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(scope.students).toEqualData([]);
    $httpBackend.flush();

    expect(scope.students.length).toBe(3);
  });
});
