angular
    .module('app')
    .controller('annualLeaveCtrl', ['$scope', 'AnnualLeave', function($scope, AnnualLeave) {
        $scope.title = "İzin Tipi";
        AnnualLeave.get().then(function(data) {
            $scope.annualLeaves = data;
        });

        $scope.save = function(annualLeaves) {
            AnnualLeave.post(annualLeaves).then(function(response) {
              AnnualLeave.get().then(function(data) {
                  $scope.annualLeaves = data;
              });
            });
            $scope.personnelSave = {};
        };

        $scope.delete = function(id) {
          AnnualLeave.delete(id).then(function(response) {
            AnnualLeave.get().then(function(data) {
                $scope.annualLeaves = data;
            });
          });
        };
    }]);
