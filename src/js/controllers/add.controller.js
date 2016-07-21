export default function AddController($scope, $http, SERVER, $state){
    $scope.addImg = img => {
        $http.post(SERVER.URL, img).then(resp => {
            $state.go('root.home');
        });
    };

}

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
