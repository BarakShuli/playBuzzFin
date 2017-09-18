(function() {
    'use strict';

    angular
        .module('myApp.videoPlayer', [])
        .component('videoPlayer', {
            templateUrl: 'components/videoPlayer/videoPlayer.html',
            bindings: {
                list: '='
            },
            controller: videoPlayerController,
            controllerAs: "vm"
            });

    videoPlayerController.$inject = ['$compile', '$scope', '$sce', 'jsonValidationService'];

    function videoPlayerController($compile, $scope, $sce, jsonValidationService) {
        var vm  = this;
        vm.$onInit = function(){
            vm.videoList = vm.list;
        }

        vm.getVideoUrl = function(baseUrl, sourceId){
            var html = [];
            html.push(baseUrl);
            html.push(sourceId);
            return html.join("");
        }

        /* get the video url and return A wrapped version of value that can be used as a trusted variant of your value */
        vm.trustSrc = function(baseUrl, sourceId) {
            var src = vm.getVideoUrl(baseUrl, sourceId);
            return $sce.trustAsResourceUrl(src);
        }

        /*validate that we have all the properties we need to render to the view*/
        vm.isValidJson = function(item){
            vm.isValid = jsonValidationService.isValidJson(item);
            if(!vm.isValid){
                vm.errorMsg = jsonValidationService.getJsonFieldErrorMsg()[item.source];
            }
            return vm.isValid;
        }
    }
})();


