/**
 * @author fansufei
 * @date 2016-01-12
 */
var module = angular.module('env', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    'angularBMap',
    'angular-echarts',
]);

module.config([
    '$routeProvider',
    '$httpProvider',
    'angularBMapProvider',
    function($routeProvider, $httpProvider, angularBMap) {
        $httpProvider.defaults.transformRequest = function(request){
            if(typeof(request)!='object') {
                return request;
            }
            var str = [];
            for(var k in request){
                if(k.charAt(0)=='$'){
                    delete request[k];
                    continue;
                }
                var v='object'==typeof(request[k])?JSON.stringify(request[k]):request[k];
                str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
            return str.join("&");
        };
        $httpProvider.defaults.timeout=10000;
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        angularBMap.setDefaultPosition(114.3, 30.6);//设置默认中心点

        $routeProvider
        //默认
        .when('/', {
             templateUrl: '/env/static/env/views/home/home.html',
             controller: 'HomeController'           
        })
        .when('/airport', {
            templateUrl: '/env/static/env/views/airport/airport.html',
            controller: 'AirController'
        })
        .when('/dayreport', {
            templateUrl: '/env/static/env/views/dayreport/dayreport.html',
            controller: 'DayreportController'
        })
        .when('/trend', {
            templateUrl: '/env/static/env/views/trend/trend.html',
            controller: 'TrendController'
        })
        .when('/about', {
            templateUrl: '/env/static/env/views/about/info.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'
        });

    }
]);
module.run(['$rootScope', function ($rootScope) {
    $rootScope.headerUrl = '/env/static/env/views/header/header.html';
}]);

