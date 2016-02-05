angular.module('myAngular', [
	'myAngular.main',
  'myAngular.services',
  'myAngular.login',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'loginController',
      data: {
        requireLogin: false
      }
    })

  $urlRouterProvider.otherwise('/login');
})

.run(function () {
  console.log('Running app!');
});