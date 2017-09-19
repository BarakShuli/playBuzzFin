(function() {
    'use strict';

    angular
        .module('myApp.basicVideoComponent', [])
        .component('basicVideoComponent', {
            templateUrl: 'components/basicVideo/basicVideo.html',
            bindings: {
                url: '='
            },
            controller: basicVideoComponent,
            controllerAs: "vm"
            });

    basicVideoComponent.$inject = ['$sce', 'videoPlayerService'];

    function basicVideoComponent($sce, videoPlayerService) {
        var vm  = this;
        vm.$onInit = function(){
             vm.sourceUrl = videoPlayerService.trustSrc('', this.url);
        }
    }
})();


