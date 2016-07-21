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
            url: '/about',
            templateUrl: 'templates/about.template.htm',
            controller: 'DetailController'
        }).state('root.add', {
            url: '/add',
            templateUrl: 'templates/add.template.htm',
            controller: 'AddController'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];