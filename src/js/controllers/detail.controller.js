import _ from 'lodash';

export default function DetailController($scope, $http, SERVER, $location){
    init();
    function init(){
        $http.get(SERVER.URL + $location.$$hash).then(resp => {
            $scope.IMG = resp.data;
        });
    }

    $scope.addLike = img => {
        img.likes++;
        $http.put(SERVER.URL + img._id, img);
    };
}

DetailController.$inject = ['$scope', '$http', 'SERVER', '$location'];
