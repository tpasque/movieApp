var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController'
      })
      .when('/{{movie.imdbID}}/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      // .otherwise('/');
});
