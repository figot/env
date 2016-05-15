/**
 * @author fansufei
 * @date 2016-01-27
 */
 angular.module('env').factory('LcsDetail', ['$resource', function ($resource) {
    return $resource('/lcsproxy/queryRequestRecord', null, {
      get: {
        method: 'POST',
        url: '/lcsproxy/queryRequestRecord'
      },
      update: {
      	method: 'POST',
      	url: '/lcsproxy/updateDeviceConf'
      }
    });
 }]);

angular.module('env').factory('LcsList', ['$resource', function ($resource) {
  return $resource('/lcsproxy/getDeviceInfo', null, {
    get: {
      method: 'POST',
      url: '/lcsproxy/getDeviceInfo'
    },
    update: {
      method: 'POST',
      url: '/lcsproxy/updateDeviceConf'
    }
  });
}]);