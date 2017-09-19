(function() {
    'use strict';

    angular
        .module('myApp.facebookComponent', [])
        .component('facebookComponent', {
            templateUrl: 'components/facebook/facebook.html',
            bindings: {
                url: '='
            },
            controller: facebookComponent,
            controllerAs: "vm"
            });

    facebookComponent.$inject = ['$sce', 'videoPlayerService'];

    function facebookComponent($sce, videoPlayerService) {
        var vm  = this;
        vm.$onInit = function(){
            vm.sourceUrl = videoPlayerService.trustSrc('https://www.facebook.com/video/embed?video_id=', this.url);
        }
    }
})();


