(function() {
    'use strict';

    angular
        .module('myApp.jsonValidationService', [])
        .service('jsonValidationService', jsonValidationService);

    jsonValidationService.$inject = [];

    function jsonValidationService($http) {
        /* return the common fields for all video types */
        this.commonJsonFields = function(){
            var fieldList = [];
            fieldList.push("title");
            fieldList.push("type");
            fieldList.push("source");
            fieldList.push("views");
            fieldList.push("videoId");
            return fieldList;
        }

        this.isValidFBJsonFields = function(item){
            var fieldList = [];
            fieldList = this.commonJsonFields();
            return this.checkJsonFields(fieldList, item);
        }

        this.isValidYoutubeJsonFields = function(item){
            var fieldList = [];
            fieldList = this.commonJsonFields();
            return this.checkJsonFields(fieldList, item);
        }

        this.isValidURLJsonFields = function(item){
            var fieldList = [];
            fieldList = this.commonJsonFields();
            fieldList.push("url");
            return this.checkJsonFields(fieldList, item);
        }

        /* check if all necessary fields are exists */
        this.checkJsonFields = function(fieldList, item){
            var flag = true;
            for (var i=0; i<fieldList.length; i++){
                if(!item.hasOwnProperty(fieldList[i])){
                    flag = false;
                    break;
                }
            }
            return flag;
        }

        /* factory function the invoke the right function by the type of the video */
        this.isValidJson = function(item){
            var flag = true;
            if(item.source === "facebook"){
                flag = this.isValidFBJsonFields(item);
            }else if(item.source === "youtube"){
                flag = this.isValidYoutubeJsonFields(item);
            }else{
                flag = this.isValidURLJsonFields(item);
            }
            return flag;
        }

        this.getJsonFieldErrorMsg = function(){
            var errorMg = {
                "facebook"  : "Facebook​ ​video​ ​post​ ​is​ ​missing",
                "youtube"   : "Youtube​ ​video​​ ​is​ ​missing",
                "url"       : "Sorry video​​ ​is​ ​missing"
            }
            return errorMg;
        }

    }
})();
