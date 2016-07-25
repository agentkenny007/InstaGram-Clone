import angular from 'angular';
import 'angular-ui-router';
import 'ng-content-editable';
import config from './config';
import SERVER from './server.constant';
import HomeController from './controllers/home.controller';
import SaladsController from './controllers/salads.controller';
import DetailController from './controllers/detail.controller';
import AddController from './controllers/add.controller';
import EditController from './controllers/edit.controller';
import SingleController from './controllers/single.controller';

angular
    .module('app', ['ui.router','content-editable'])
    .config(config)
    .constant('SERVER', SERVER)
    .controller('HomeController', HomeController)
    .controller('SaladsController', SaladsController)
    .controller('DetailController', DetailController)
    .controller('AddController', AddController)
    .controller('EditController', EditController)
    .controller('SingleController', SingleController);
