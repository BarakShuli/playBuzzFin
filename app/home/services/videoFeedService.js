(function() {
    'use strict';

    angular
        .module('myApp.videoFeedService', [])
        .service('videoFeedService', videoFeedService);

    videoFeedService.$inject = ['$http'];

    function videoFeedService($http) {
        var cdnUrl = 'http://localhost:8080/getVideoFeed', self = this;
        this.isDataAvailable = false;
        
        /* call server to get filtered data */
        this.getVideoFeedList = function($http, vm){
            return $http.get(cdnUrl, {params:{key:vm.ddlSelectedVideoType.Name}})
                .then(function(response) {
                    self.isDataAvailable = true;
                    return response.data;
                });   
        }
    }
})();
