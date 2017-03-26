angular.module('starter').config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('listarCarros');

$stateProvider.state('listarCarros',{
  url: '/listarCarros',
  templateUrl: 'templates/listarCarros.html',
  controller: 'controller'
});


});
