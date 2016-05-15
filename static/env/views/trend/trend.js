/**
 * @file detail.js
 * @author fansufei
 * @date 2016-01-11
 */
angular.module('env').controller('TrendController', [
    '$scope',
    '$location',
    '$route',
    '$rootScope',
    'LcsDetail',
    function($scope, $location, $route, $rootScope, LcsDetail) {
        $scope.info = $route.current.params;

    var pageload = {
        name: 'AQI实时变化图',
        datapoints: [
            { x: 1, y: 110 },
            { x: 2, y: 23 },
            { x: 3, y: 75 },
            { x: 4, y: 32 },
            { x: 5, y: 62 },
            { x: 6, y: 20 },
            { x: 7, y: 13 },
            { x: 8, y: 10 },
            { x: 9, y: 62 },
            { x: 10, y: 82 },
            { x: 11, y: 40 },
            { x: 12, y: 63 },
            { x: 13, y: 95 },
            { x: 14, y: 22 },
            { x: 15, y: 42 },
            { x: 16, y: 40 },
            { x: 17, y: 23 },
            { x: 18, y: 90 },
            { x: 19, y: 12 },
            { x: 20, y: 12 },
            { x: 21, y: 10 },
            { x: 22, y: 23 },
            { x: 23, y: 45 },
            { x: 24, y: 62 },
        ]
    };

    var firstPaint = {
        name: 'page.firstPaint',
        datapoints: [
            { x: 2001, y: 22 },
            { x: 2002, y: 13 },
            { x: 2003, y: 35 },
            { x: 2004, y: 52 },
            { x: 2005, y: 32 },
            { x: 2006, y: 40 },
            { x: 2007, y: 63 },
            { x: 2008, y: 80 },
            { x: 2009, y: 20 },
            { x: 2010, y: 25 },
        ]
    };

    $scope.config = {
        title: 'Line Chart',
        subtitle: 'Line Chart Subtitle',
        debug: true,
        showXAxis: true,
        showYAxis: true,
        showLegend: true,
        width: 640,
        height: 480,
        stack: false,
    };

    $scope.data = [ pageload ];
    $scope.multiple = [pageload, firstPaint ];

    }
]);
