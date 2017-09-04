angular
    .module('app')
    .factory('Personnel', ['$http', function($http) {
        return {
            get: function() {
              return $http.get('http://localhost:8081/personnels').then(function(response) {
                return response.data[0];
              });
            },
            post: function(personnel){
              return $http.post('http://localhost:8081/personnels', personnel).then(function(response) {
                return response;
              });
            },
            delete: function(id){
              return $http.delete('http://localhost:8081/personnels/' + id).then(function(response) {
                return response;
              });
            },
            update: function(id, personnel) {
              return $http.put('http://localhost:8081/personnels/' + id, personnel).then(function(response) {
                return response;
              });
            }
        };
    }])
