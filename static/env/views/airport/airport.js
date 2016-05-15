/**
 * @file detail.js
 * @author fansufei
 * @date 2016-01-11
 */
angular.module('env').controller('AirController', [
    '$scope',
    '$location',
    '$route',
    '$rootScope',
    'LcsDetail',
    function($scope, $location, $route, $rootScope, LcsDetail) {
        $scope.info = $route.current.params;


        function timeConverter(timestamp){
            var a = new Date(timestamp * 1000);
            var year = a.getFullYear();
            var month = a.getMonth() + 1;
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var msec = a.getMilliseconds();
            var time = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec + ':' + msec;
            return time;
        }
    }
]);
