app.controller('ShowController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.works = "hello it works, and you are on the show page"

  $scope.individualMovieSearch = function (id) {
    // var id = $scope.movieData.imdbID
    $http.get('http://www.omdbapi.com/?i='+ id).then(function (idData) {
      $scope.idData = idData.data
      console.log($scope.idData);
      console.log($scope.idData.Title);
      $location.path('/#/'+id+'/show');
    })
  }
}]);
