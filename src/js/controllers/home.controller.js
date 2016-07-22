export default function HomeController($scope, $http, SERVER){
    init();

    function init(){
        $http.get(SERVER.URL).then(resp => {
            $scope.imgs = resp.data;
        });
    }
    $scope.addLike = img => {
        img.likes++;
        $http.put(SERVER.URL + img._id, img).then(resp => {
            // $state.go('root.home');
            console.log(resp.data);
        });
    };
}

HomeController.$inject = ['$scope', '$http', 'SERVER'];
