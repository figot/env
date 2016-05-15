/**
 * @file detail.js
 * @author fansufei
 * @date 2016-01-11
 */
angular.module('env').controller('AboutController', [
    '$scope',
    '$location',
    '$route',
    '$rootScope',
    'LcsDetail',
    function($scope, $location, $route, $rootScope, LcsDetail) {
        $scope.info = $route.current.params;
        $scope.detailcnt = {pn: 1, rn: 10, count: 0};

        console.log($scope);

        $scope.lcsdata = [];
        $scope.lcsreqdetail = [];
        init($scope.info.urlCuid, $scope.detailcnt.pn, $scope.detailcnt.rn);
        
        function init(pcuid, ppn, prn) {
        	LcsDetail.get({
        		cuid: pcuid,
                pn: ppn,
                rn: prn,
            }).$promise.then(function (data) {
                if (data.errno === 0) {
                	$scope.lcsdata = data.data;
                	$scope.lcsreqdetail = $scope.lcsdata.recordlist.reqinfo;
                    $scope.detailcnt.count = $scope.lcsdata.count;
                    $scope.lcsdata.deviceinfo.updatetime = timeConverter($scope.lcsdata.deviceinfo.updatetime);
                    for (var i = $scope.lcsdata.recordlist.length - 1; i >= 0; i--) {
                        $scope.lcsdata.recordlist[i].reqtime = timeConverter($scope.lcsdata.recordlist[i].reqtime);
                        $scope.lcsdata.recordlist[i].showjson = true;
                    };
                } else {

                }
            }, function () {

            });
        }

        $scope.goBackToLcsList = function () {
            $location.path('/');
        };

        $scope.BackpageDetail = function () {
            if ($scope.detailcnt.pn > 1) {
                $scope.detailcnt.pn = $scope.detailcnt.pn - 1;
                init($scope.info.urlCuid, $scope.detailcnt.pn, $scope.detailcnt.rn);
            }
        };

        $scope.FirstpageDetail = function () {
            if ($scope.detailcnt.pn != 1) {
                $scope.detailcnt.pn = 1;
                init($scope.info.urlCuid, $scope.detailcnt.pn, $scope.detailcnt.rn);
            }
        };

        $scope.NextpageDetail = function () {
            if ($scope.detailcnt.count > $scope.detailcnt.pn * $scope.detailcnt.rn) {
                $scope.detailcnt.pn = $scope.detailcnt.pn + 1;
                init($scope.info.urlCuid, $scope.detailcnt.pn, $scope.detailcnt.rn);
            }
        };


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
