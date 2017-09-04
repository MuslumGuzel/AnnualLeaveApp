angular
    .module('app')
    .factory('Leave', ['$http', function($http) {
        return {
            get: function() {
              return $http.get('http://localhost:8081/leaves').then(function(response) {
                return response.data[0];
              });
            },
            post: function(leave){
              return $http.post('http://localhost:8081/leaves', leave).then(function(response) {
                return response;
              });
            },
            delete: function(id){
              return $http.delete('http://localhost:8081/leaves/' + id).then(function(response) {
                return response;
              });
            },
            update: function(id, leave) {
              return $http.put('http://localhost:8081/leaves/' + id, leave).then(function(response) {
                return response;
              });
            }
        };
    }])
