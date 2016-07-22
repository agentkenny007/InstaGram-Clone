import _ from 'lodash';

export default function SingleController($scope, $http, SERVER, $stateParams){
    console.log($stateParams);
    init();
    function init(){
        $http.get(SERVER.URL + $stateParams.id).then(resp => {
            $scope.IMG = resp.data;
        }, err => {
            $state.go('root.home');
        });
    }

    $scope.addLike = img => {
        img.likes++;
        $http.put(SERVER.URL + img._id, img);
    };
}

SingleController.$inject = ['$scope', '$http', 'SERVER', '$stateParams'];
