'use strict';

describe('Grade', function () {

  beforeEach(module('ionic'));
  beforeEach(module('yoioGrade'));
  beforeEach(module('yoioJasmineExt'));

  beforeEach(inject(function(CustomMatchers) {
    this.addMatchers(CustomMatchers);
  }));

  describe('ListCtrl', function () {
    var GradeListCtrl, scope, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/grades.json').
        respond([{ id: 0 }, { id: 0 }, { id: 2 }]);

      scope = $rootScope.$new();
      GradeListCtrl = $controller('GradeListCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of grades to the scope', function () {
      expect(scope.grades).toDeepEqual([]);
      $httpBackend.flush();

      expect(scope.grades.length).toBe(3);
    });
  });

});
