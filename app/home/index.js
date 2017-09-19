(function() {
    'use strict';

    angular
        .module('myApp.index', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/index', {
                templateUrl: 'home/index.html',
                controller: 'indexController',
                controllerAs:"vm"
            });
        }])
        .controller('indexController', indexController);

    indexController.$inject = ['$http', '$scope', 'videoFeedService']

    function indexController($http, $scope, videoFeedService) {
        var vm = this;
        /*json object for dropdown list options*/ 
        vm.arrList = [{Id: 1,Name: 'all'}, {Id: 2,Name: 'facebook'}, {Id: 3,Name: 'youtube'}, {Id: 4,Name: 'url'}];
        
        /*set selected dropdown option to be "all"*/
        vm.ddlSelectedVideoType = vm.arrList[0];
        
        /* init function */
        vm.init = function(){
            var promiseObj = videoFeedService.getVideoFeedList($http, vm);
            promiseObj.then(function(result){
                vm.isDataAvailable = true;
                vm.dataList = result;
            })
        }
        
        /* render ng-repeat after seleced dropdown option changed */
        vm.getSelectedValue = function(){
            vm.showSpinner = true;
            var promiseObj = videoFeedService.getVideoFeedList($http, vm);
            promiseObj.then(function(result){
                vm.isDataAvailable = true;
                vm.dataList = result;
                vm.showSpinner = false;
            })
        }

        vm.init();
    }
})();
