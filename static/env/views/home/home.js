/**
 * @file content.js
 * @author fansufei
 * @date 2016-01-15
 */
angular.module('env').controller('HomeController', [
    '$scope',
    '$location',
    '$route',
    '$rootScope',
    function($scope, $location, $route, $rootScope) {
        $scope.info = $route.current.params;
        $scope.urlCuid = {};
        $scope.list = {pn: 1, rn: 10, count: 0};

        console.log($scope);

        $scope.lcsContentList = [];
        $scope.lcsItem = [];



        init($scope.list.pn, $scope.list.rn);

        function init(ppn, prn) {

        }

        function update(pcuid, phost, pport, premark) {
           
        }


        $scope.goToLcsDetail = function (content, event) {
            $scope.urlCuid = content.cuid;
            $location.path('/lcscontent/' + $scope.urlCuid);
        };


        function timeConverter(timestamp){
            var a = new Date(timestamp * 1000);
            var year = a.getFullYear();
            var month = a.getMonth() + 1;
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec ;
            return time;
        }
    }
]); 
    
