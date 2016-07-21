import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import SERVER from './server.constant';
import HomeController from './controllers/home.controller';
import DetailController from './controllers/detail.controller';
import AddController from './controllers/add.controller';
import EditController from './controllers/edit.controller';

angular
    .module('app', ['ui.router'])
    .config(config)
    .constant('SERVER', SERVER)
    .controller('HomeController', HomeController)
    .controller('DetailController', DetailController)
    .controller('AddController', AddController)
    .controller('EditController', EditController);
