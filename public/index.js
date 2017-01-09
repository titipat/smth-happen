angular.module('app', [])
.controller('AppController', function ($http, $scope) {
  $scope.httpGet = function (path) {
    console.log('HTTP GET:', path)
    $http.get(path).then(function (res) {
      console.log(res)
    }, function (err) {
      console.error(err)
    })
  }
})