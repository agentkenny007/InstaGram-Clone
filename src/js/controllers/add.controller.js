export default function Add($scope, $http, SERVER, $state, $stateParams){
    $scope.state = $stateParams.state;
    $scope.addImg = img => {
        img.likes = 0;
        $http.post(SERVER.URL, img).then(resp => {
            $state.go('root.home');
        });
    };
    $scope.addHilariousSalad = img => {
        img.likes = 0;
        $http.post(SERVER.SALADS, img).then(resp => {
            $state.go('root.salads');
        });
    };
}

Add.$inject = ['$scope', '$http', 'SERVER', '$state', '$stateParams'];
