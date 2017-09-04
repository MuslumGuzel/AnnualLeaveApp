angular
    .module('app', [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            })
            .state('personnel', {
                url: '/personnel',
                templateUrl: 'personnel.html',
                controller: 'personnelCtrl'
            })
            .state('annualLeave', {
                url: '/annualLeave',
                templateUrl: 'annualLeave.html',
                controller: 'annualLeaveCtrl'
            })
            .state('leave', {
                url: '/leave',
                templateUrl: 'leave.html',
                controller: 'leaveCtrl'
            })
    }])
