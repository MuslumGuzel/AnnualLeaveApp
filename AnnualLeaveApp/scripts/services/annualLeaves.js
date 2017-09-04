angular
    .module('app')
    .factory('AnnualLeave', ['$http', function($http) {
        return {
            get: function() {
              return $http.get('http://localhost:8081/annualLeaves').then(function(response) {
                return response.data[0];
              });
            },
            post: function(annualLeave){
              return $http.post('http://localhost:8081/annualLeaves', annualLeave).then(function(response) {
                return response;
              });
            },
            delete: function(id){
              return $http.delete('http://localhost:8081/annualLeaves/' + id).then(function(response) {
                return response;
              });
            },
            update: function(id, annualLeave) {
              return $http.put('http://localhost:8081/annualLeaves/' + id, annualLeave).then(function(response) {
                return response;
              });
            }
        };
    }])
