export default function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'templates/layout.template.htm'
        }).state('root.home', {
            url: '/',
            templateUrl: 'templates/home.template.htm',
            controller: 'HomeController'
        }).state('root.detail', {
            url: '/detail',
            templateUrl: 'templates/detail.template.htm',
            controller: 'DetailController'
        }).state('root.add', {
            url: '/add',
            templateUrl: 'templates/add.template.htm',
            controller: 'AddController'
        }).state('root.edit', {
            url: '/add',
            templateUrl: 'templates/edit.template.htm',
            controller: 'EditController'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
