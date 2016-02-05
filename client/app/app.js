angular.module('myAngular', [
	'myAngular.main',
  'myAngular.services',
  'myAngular.home',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'homeController',
    data: {
      requireLogin: false
    }
  })

  $urlRouterProvider.otherwise('/home');
})

.run(function () {
  console.log('Running app!');
});
