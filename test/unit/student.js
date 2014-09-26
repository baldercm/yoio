'use strict';

describe('Student', function () {

  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('ionic'));
  beforeEach(module('yoioStudent'));

  describe('ListCtrl', function () {
    var StudentListCtrl, scope, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/students.json').
        respond([{ id: 0 }, { id: 0 }, { id: 2 }]);

      scope = $rootScope.$new();
      StudentListCtrl = $controller('StudentListCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of students to the scope', function () {
      expect(scope.students).toEqualData([]);
      $httpBackend.flush();

      expect(scope.students.length).toBe(3);
    });
  });

  describe('DetailCtrl', function () {
    var StudentDetailCtrl, scope, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, $stateParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/student.json').
        respond({ id: 'STUD_A12345B', name: 'Student Jones'});

      $stateParams.id = 'STUD_A12345B';

      scope = $rootScope.$new();
      StudentDetailCtrl = $controller('StudentDetailCtrl', {
        $scope: scope
      });
    }));

    it('should attach a student to the scope', function () {
      $httpBackend.flush();

      expect(scope.data.id).toBe('STUD_A12345B');
      expect(scope.student.id).toBe('STUD_A12345B');
      expect(scope.student.name).toBe('Student Jones');
    });
  });
});
