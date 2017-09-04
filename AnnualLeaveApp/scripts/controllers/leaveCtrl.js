angular
    .module('app')
    .controller('leaveCtrl', ['$scope', 'Leave', function($scope, Leave) {
        $scope.title = "İzin Kullan";

        Leave.get().then(function(data) {
            $scope.leaves = data;
        });

        $scope.save = function(leaves) {
            Leave.post(leaves).then(function(response) {
              Leave.get().then(function(data) {
                  $scope.leaves = data;
              });
            });
        };

        $scope.delete = function(id) {
          Leave.delete(id).then(function(response) {
            Leave.get().then(function(data) {
                $scope.leaves = data;
            });
          });
        };
    }]);
