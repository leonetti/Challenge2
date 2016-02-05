angular.module('myAngular.home', [])

.controller('homeController', function($scope, $http, $timeout) {
  console.log('Initialized Home Controller');

  $scope.items = [];
  $scope.currentPage = 1;
  $scope.perPage = 15;
  $scope.numberOfPages = 1;
  $scope.pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

  var request = function(text) {
    $http({
        method: 'GET',
        url: 'http://api.vip.supplyhub.com:19000/products?search=' + text + "&limit=500"
      }).then(function success(response) {
        if(response.data["0"].product) {
          $scope.items = response.data;
          $scope.numberOfPages = Math.ceil($scope.items.length/$scope.perPage);
        } else {
          $scope.items = []
          $scope.numberOfPages = 0;
        }
      }, function error(response) {
        console.log('error');
      })
    };

  $scope.search = function(text) {
    console.log($scope.currentPage);
    if(text) {
      $timeout(request(text), 100);
    }
  }

  $scope.changePage = function(page) {
    $scope.currentPage = page;
  }

  $scope.pageColor = function(page) {
    if(page === $scope.currentPage) {
      return 'red';
    }
  }
})

.filter('startFrom', function(){
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});
