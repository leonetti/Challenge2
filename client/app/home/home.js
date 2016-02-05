angular.module('myAngular.home', [])

.controller('homeController', function($scope, $http, $timeout) {
  console.log('Initialized Home Controller');

  $scope.items = [];

  var request = function(text) {
    $http({
        method: 'GET',
        url: 'http://api.vip.supplyhub.com:19000/products?search=' + text + "&limit=150"
      }).then(function success(response) {
        $scope.items = response.data;
      }, function error(response) {
        console.log(response);
      })
    };

  $scope.search = function(text) {
    if(text) {
      $timeout(request(text), 100);
    }
  }
});
