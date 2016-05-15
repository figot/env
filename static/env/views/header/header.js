/**
 * @file header.js
 * @author fansufei
 * @date 2016-01-11
 */
angular.module('env').controller('HeaderController', [
    '$scope',
    '$location',
    '$route',
    '$rootScope',
    '$window',
    function($scope, $location, $route, $rootScope, $window) {
        $scope.info = $route.current.params;
        $scope.urlpath = ['', 'airport', 'dayreport', 'trend', 'about'];

        $scope.mainPage = function () {
            var path = $scope.urlpath[0];
            $location.path('/' + path);
            $window.location.reload();
        }

        $scope.airPortPage = function () {
            var path = $scope.urlpath[1];
            $location.path('/' + path);
        }

        $scope.dayReportPage = function () {
            var path = $scope.urlpath[2];
            $location.path('/' + path);
        }

        $scope.trendPage = function () {
            var path = $scope.urlpath[3];
            $location.path('/' + path);
        }

        $scope.about = function () {
            var path = $scope.urlpath[4];
            $location.path('/' + path);
        }
  }
]);
