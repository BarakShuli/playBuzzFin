(function() {
    'use strict';

    angular
        .module('myApp.videoPlayerService', [])
        .service('videoPlayerService', videoPlayerService);

    videoPlayerService.$inject = ['$sce'];

    function videoPlayerService($sce) {
        
        this.getVideoUrl = function(baseUrl, sourceId){
            var html = [];
            html.push(baseUrl);
            html.push(sourceId);
            return html.join("");
        }

        /* get the video url and return A wrapped version of value that can be used as a trusted variant of your value */
        this.trustSrc = function(baseUrl, sourceId) {
            var src = this.getVideoUrl(baseUrl, sourceId);
            return $sce.trustAsResourceUrl(src);
        }

    }
})();
