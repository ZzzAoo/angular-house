'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  //控制器：获取场景
  .controller('sceneQueryController',function($scope,$http){
    $http({
      method:'get',
      url:'http://192.168.8.9/renwu/index.php/Home/Index/sceneAll',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).success(function (data,status) {
      $scope.dataList=data;
    })
    $scope.goModal=function (sceneId) {
      console.info(sceneId);
      $http({
        method:'get',
        url:'http://192.168.8.9/renwu/index.php/Home/Index/sceneAll/sceneid/'+sceneId+''
      }).success(function(data,status){
        $scope.scene=data.scene;
        $scope.projectid='7878787'
      });
    }
  })
  //路由场景管理controller，用于添加，管理scene;$routeParams绑定url参数
  .controller('sceneManagerController',function ($scope,$http,$rootScope,$routeParams) {
        $scope.scene,$scope.project="",$scope.title="场景维护";
        $http.get('http://192.168.8.9/renwu/index.php/Home/Index/sceneAll/sceneid/'+$routeParams.sceneId+'')
          .success(function(data){
            $scope.scene=data.scene;
            $scope.project={repeatSelect:'2',result:data.pro};
          })
  })
  .controller('userController',function($scope,$http){
    $scope.ol='popoopop'
  })
  //项目控制器
  .controller('projectIndex',function($scope,$http){
      $http({
        method:'get',
        url:'http://192.168.8.9/renwu/index.php/Home/Index/project',
      }).success(function(data,status){
        $scope.project=data;
      });
  })
//   .controller('scenetAddController',function ($scope,$http) {
//       $http({
//         method:'get',
//         url:'http://192.168.8.9/renwu/index.php/Home/Index/sceneAll/sceneid/'+"scene_rGgpu7IrLt"+'',
//         headers:{
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       }).success(function (data,status) {
//         debugger;
//         $scope.scene=data;
//       })
// })

;

$('.nav li').on('click',function () {
  if($(this).siblings().hasClass('active')){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  }
  $(this).addClass('active');
});
// angular.module('App')
