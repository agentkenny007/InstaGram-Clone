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

    $scope.updateName = img => {
        console.log('local img', img);
        console.log('large img', $scope.IMG);
        console.log('Title', $scope.Title);
        if ($scope.nameTimeout) clearTimeout($scope.nameTimeout);
        $scope.nameTimeout = setTimeout(()=>{
            $scope.Title = 'happiness.';
            $scope.state == 'salads' ? $http.put(SERVER.SALADS + img._id, img) :
            $http.put(SERVER.URL + img._id, img);
            // $scope.state == 'salads' ? $http.patch(SERVER.SALADS + img._id, { name: img.name }) :
            // $http.patch(SERVER.URL + img._id, { name: img.name });
        }, 500);
    };
}

SingleController.$inject = ['$scope', '$document', '$http', 'SERVER', '$state', '$stateParams'];
