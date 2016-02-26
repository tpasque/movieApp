app.controller('MainController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.works = "hello it works, and you are on the home page"

  $scope.submitSearch = function(term){
      var term = $scope.search
      $http.get('http://www.omdbapi.com/?s='+ term +'&tomatoes=true&plot=full').then(function(data){
      $scope.movieData = data.data.Search
    })
  };

  $scope.individualMovieSearch = function (id) {
    // var id = $scope.movieData.imdbID
    // var theId = $routeParams.id
    // console.log(theId);
    $http.get('http://www.omdbapi.com/?i='+ id).then(function (idData) {
      $scope.idData = idData.data
      console.log($scope.idData);
      console.log($scope.idData.Title);
      console.log(id);
      $location.path('/'+id+'/show')
    })
  }
}]);
