(function() {
    'use strict';

    angular
        .module('myApp.youtubeComponent', [])
        .component('youtubeComponent', {
            templateUrl: 'components/youtube/youtube.html',
            bindings: {
                url: '='
            },
            controller: youtubeComponent,
            controllerAs: "vm"
            });

    youtubeComponent.$inject = ['$sce', 'videoPlayerService'];

    function youtubeComponent($sce, videoPlayerService) {
        var vm  = this;
        vm.$onInit = function(){
             vm.sourceUrl = videoPlayerService.trustSrc('https://www.youtube.com/embed/', this.url);
        }
    }
})();


