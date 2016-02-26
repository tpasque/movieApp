app.controller('ShowController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.works = "hello it works, and you are on the show page"

  console.log("show controller running");

  $http.get('http://www.omdbapi.com/?i='+$routeParams.id).then(function (idData) {
    $scope.idData = idData.data
    // console.log($scope.idData);
    // console.log($scope.idData.Poster);
    // console.log($scope.idData.Title);
})
}]);
