export default function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'templates/layout.template.htm'
        }).state('root.home', {
            url: '/',
            templateUrl: 'templates/home.template.htm',
            controller: 'HomeController'
        }).state('root.salads', {
            url: '/hilarious-salads',
            templateUrl: 'templates/home.template.htm',
            controller: 'SaladsController'
        }).state('root.detail', {
            url: '/detail',
            templateUrl: 'templates/single.template.htm',
            controller: 'DetailController'
        }).state('root.add', {
            url: '/add',
            templateUrl: 'templates/add.template.htm',
            controller: 'AddController'
        }).state('root.edit', {
            url: '/edit',
            templateUrl: 'templates/edit.template.htm',
            controller: 'EditController'
        }).state('root.single', {
            url: '/single/{id}',
            templateUrl: 'templates/single.template.htm',
            controller: 'SingleController'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
