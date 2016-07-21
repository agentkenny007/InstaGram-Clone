export default function HomeController($scope, $http, SERVER){
    init();

    function init(){
        $http.get(SERVER.URL).then(resp => {
            $scope.imgs = resp.data;
        });
    }
}

HomeController.$inject = ['$scope', '$http', 'SERVER'];
