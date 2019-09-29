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
      .when('/gT', {
        templateUrl: 'views/gt.html',
        controller: 'GtCtrl',
        controllerAs: 'gT'
      })
      .when('/gB', {
        templateUrl: 'views/gb.html',
        controller: 'GbCtrl',
        controllerAs: 'gB'
      })
      .when('/gC', {
        templateUrl: 'views/gc.html',
        controller: 'GcCtrl',
        controllerAs: 'gC'
      })
      .when('/gA', {
        templateUrl: 'views/ga.html',
        controller: 'GaCtrl',
        controllerAs: 'gA'
      })
      .when('/gP', {
        templateUrl: 'views/gp.html',
        controller: 'GpCtrl',
        controllerAs: 'gP'
      })
      .when('/gE', {
        templateUrl: 'views/ge.html',
        controller: 'GeCtrl',
        controllerAs: 'gE'
      })
      .when('/gB', {
        templateUrl: 'views/gb.html',
        controller: 'GbCtrl',
        controllerAs: 'gB'
      })
      .when('/gI', {
        templateUrl: 'views/gi.html',
        controller: 'GiCtrl',
        controllerAs: 'gI'
      })
      .when('/gBo', {
        templateUrl: 'views/gbo.html',
        controller: 'GboCtrl',
        controllerAs: 'gBo'
      })
      .when('/gBo', {
        templateUrl: 'views/gbo.html',
        controller: 'GboCtrl',
        controllerAs: 'gBo'
      })
      .when('/sM', {
        templateUrl: 'views/sm.html',
        controller: 'SmCtrl',
        controllerAs: 'sM'
      })
      .when('/sS', {
        templateUrl: 'views/ss.html',
        controller: 'SsCtrl',
        controllerAs: 'sS'
      })
      .when('/sP', {
        templateUrl: 'views/sp.html',
        controller: 'SpCtrl',
        controllerAs: 'sP'
      })
      .when('/sB', {
        templateUrl: 'views/sb.html',
        controller: 'SbCtrl',
        controllerAs: 'sB'
      })
      .when('/sA', {
        templateUrl: 'views/sa.html',
        controller: 'SaCtrl',
        controllerAs: 'sA'
      })
      .when('/sBp', {
        templateUrl: 'views/sbp.html',
        controller: 'SbpCtrl',
        controllerAs: 'sBp'
      })
      .when('/sC', {
        templateUrl: 'views/sc.html',
        controller: 'ScCtrl',
        controllerAs: 'sC'
      })
      .when('/sF', {
        templateUrl: 'views/sf.html',
        controller: 'SfCtrl',
        controllerAs: 'sF'
      })
      .when('/sT', {
        templateUrl: 'views/st.html',
        controller: 'StCtrl',
        controllerAs: 'sT'
      })
      .when('/sI', {
        templateUrl: 'views/si.html',
        controller: 'SiCtrl',
        controllerAs: 'sI'
      })
      .when('/carrito', {
        templateUrl: 'views/carrito.html',
        controller: 'CarritoCtrl',
        controllerAs: 'carrito'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
