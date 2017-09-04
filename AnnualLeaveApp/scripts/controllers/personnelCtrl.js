angular
    .module('app')
    .controller('personnelCtrl', ['$scope', 'Personnel', function($scope, Personnel) {
        $scope.title = "Personel";
        Personnel.get().then(function(data) {
            $scope.personnels = data;
        });

        $scope.save = function(personnel) {
            Personnel.post(personnel).then(function(response) {
              Personnel.get().then(function(data) {
                  $scope.personnels = data;
              });
              personnelSave(personnel);
            });
        };

        $scope.delete = function(id) {
          Personnel.delete(id).then(function(response) {
            Personnel.get().then(function(data) {
                $scope.personnels = data;
            });
          });
        };

        $scope.update = function(id, personnel) {
          Personnel.update(id, personnel).then(function(response) {
            Personnel.get().then(function(data) {
                $scope.personnels = data;
            });
          });
        };

        $scope.personnelSave = function(personnel){
          personnel.PERSONNEL_NAME = null;
          personnel.PERSONNEL_DEPARTMENT = null;
          personnel.START_DATE = null;
        };

        $scope.personnelUpdate = function(personnel){
          personnel.PERSONNEL_NAME = null;
          personnel.PERSONNEL_DEPARTMENT = null;
          personnel.START_DATE = null;
        };
    }]);
