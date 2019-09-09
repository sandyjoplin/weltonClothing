'use strict';

/**
 * @ngdoc overview
 * @name clothingApp
 * @description
 * # clothingApp
 *
 * Main module of the application.
 */
angular
  .module('clothingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cT', {
        templateUrl: 'views/ct.html',
        controller: 'CtCtrl',
        controllerAs: 'cT'
      })
      .when('/cA', {
        templateUrl: 'views/ca.html',
        controller: 'CaCtrl',
        controllerAs: 'cA'
      })
      .when('/cP', {
        templateUrl: 'views/cp.html',
        controller: 'CpCtrl',
        controllerAs: 'cP'
      })
      .when('/cE', {
        templateUrl: 'views/ce.html',
        controller: 'CeCtrl',
        controllerAs: 'cE'
      })
      .when('/cB', {
        templateUrl: 'views/cb.html',
        controller: 'CbCtrl',
        controllerAs: 'cB'
      })
      .when('/cC', {
        templateUrl: 'views/cc.html',
        controller: 'CcCtrl',
        controllerAs: 'cC'
      })
      .when('/cI', {
        templateUrl: 'views/ci.html',
        controller: 'CiCtrl',
        controllerAs: 'cI'
      })
      .when('/vP', {
        templateUrl: 'views/vp.html',
        controller: 'VpCtrl',
        controllerAs: 'vP'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
