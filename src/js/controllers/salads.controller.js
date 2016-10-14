export default function HilariousSalads($scope, $http, SERVER){
    init();
    function init(){
        // $http.get(SERVER.SALADS, { params: { limit: 100 } }).then(resp => {
        $http.get(SERVER.SALADS).then(resp => {
            $scope.imgs = resp.data;
        });
    }

    $scope.addLike = img => {
        img.likes++;
        $http.put(SERVER.SALADS + img._id, img);
    };
}

HilariousSalads.$inject = ['$scope', '$http', 'SERVER'];
