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

    $scope.update = img => {
        if ($scope.nameTimeout) clearTimeout($scope.nameTimeout);
        $scope.nameTimeout = setTimeout(()=>{
            $scope.state == 'salads' ? $http.put(SERVER.SALADS + img._id, img) :
            $http.put(SERVER.URL + img._id, img);
        }, 500);
    };

    $scope.delete = img => {
        if (confirm("Are you sure that you want this image deleted?\nThis action cannot be undone."))
            $scope.state == 'salads' ? $http.delete(SERVER.SALADS + img._id, img).then(()=>{ $state.go('root.salads'); }) :
            $http.delete(SERVER.URL + img._id).then(()=>{ $state.go('root.home'); });
    }
}

SingleController.$inject = ['$scope', '$document', '$http', 'SERVER', '$state', '$stateParams'];
