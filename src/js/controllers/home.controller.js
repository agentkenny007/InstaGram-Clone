export default function Home($scope, $http, SERVER){
    init();
    function init(){
        $http.get(SERVER.URL, { params: { limit: 100 } }).then(resp => {
            $scope.imgs = resp.data;
        });
    }

    $scope.addLike = img => {
        img.likes++;
        $http.put(SERVER.URL + img._id, img);
    };
}

Home.$inject = ['$scope', '$http', 'SERVER'];
