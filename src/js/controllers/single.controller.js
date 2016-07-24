import _ from 'lodash';

export default function SingleController($scope, $document, $http, SERVER, $state, $stateParams){
    init();
    function init(){
        $http.get(SERVER.URL + $stateParams.id).then(resp => {
            resp.data ? $scope.IMG = resp.data :
            $http.get(SERVER.SALADS + $stateParams.id).then(resp => {
                $scope.IMG = resp.data;
                $scope.state = 'salads';
            }, err => {
                $state.go('root.home');
            });
        }, err => {
            $state.go('root.home');
        });
    }

    $scope.addLike = img => {
        img.likes++;
        $scope.state == 'salads' ? $http.put(SERVER.SALADS + img._id, img) :
        $http.put(SERVER.URL + img._id, img);
        $document.find('span').eq(1).addClass('liked');
        setTimeout(()=>{
            $document.find('span').eq(1).removeClass('liked');
        }, 1000);
    };
}

SingleController.$inject = ['$scope', '$document', '$http', 'SERVER', '$state', '$stateParams'];
