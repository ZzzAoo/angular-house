'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */

angular
  .module('yoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.route',
    'ngTouch'
  ])
    .directive('diHref', ['$location', '$route',function($location, $route) {
     return function(scope, element, attrs) {
         scope.$watch('diHref', function() {
             if(attrs.diHref) {
                 element.attr('href', attrs.diHref);
                 element.bind('click', function(event) {
                 scope.$apply(function(){
                        if($location.path() == attrs.diHref)
                            $route.reload();
                    });
                });
             }
         });
     }
 }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      //查看项目页面
      .when('/project', {
        templateUrl: 'views/projectIndex.html',
        controller: 'projectIndex',
        controllerAs: 'proIndex'
      })
      //查看场景数据页面
      .when('/scene', {
        templateUrl: 'views/sceneIndex.html',
        controller: 'AboutCtrl'
      })
      // 路由用户中心
      .when('/user', {
        templateUrl: 'views/userIndex.html',
        controller: 'userController'
      })
      // 路由场景管理
      .when('/scene/sceneManager/:sceneId', {
        templateUrl: 'views/template/sceneAddTemplate.html',
        controller: 'sceneManagerController'
      })
      .when('/test', {
        templateUrl: 'views/template/uploadImgTemplate.html',
        cache:false,
        controller: 'uploadImgController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(function($rootScope, $templateCache) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            console.info('90909090')
            if (typeof(current) !== 'undefined') {
                $templateCache.remove(current.templateUrl);
            }
        })
    });
    // .run(['$rootScope', '$window', '$location', '$log','$templateCache', function ($rootScope, $window, $location, $log,$templateCache) {
    //     var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    //     function stateChangeSuccess($rootScope) {
    //         $templateCache.removeAll();
    //     }
    //
    // }])

// angular.module('modalApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/modalproject', {
//         templateUrl: 'views/template/projectAddTemplate.html',
//         controller: 'projectAddTemplate',
//         controllerAs: 'projectAdd'
//       }
//       )
//   })
//   .controller('template',function ($scope,$http) {
//     $scope.mName='lihaoahaoao'
//   });
// angular.bootstrap(angular.element("#yoAngularApp"),["yoAngularApp"]);
// angular.bootstrap(angular.element("#myModal"),["modalApp"]);
