import _ from 'lodash';
// Detail controller is like a clone of single controller with a minor tweak:
//   detail controller uses a location hash to get the id. It's how I did it
//   at first before discovering AngularUI Router's $stateParams service.

export default function Detail($scope, $document, $http, SERVER, $location, $state){
    init();
    function init(){
        $http.get(SERVER.URL + $location.$$hash).then(resp => {
            if (!$location.$$hash)
                // $state.go('root.home');
            $scope.IMG = resp.data;
        }, ()=>{
            // $state.go('root.home');
        });
    }

    $scope.addLike = img => {
        img.likes++;
        $http.put(SERVER.URL + img._id, img);
        $document.find('span').eq(1).addClass('liked');
        setTimeout(()=>{
            $document.find('span').eq(1).removeClass('liked');
        }, 1000);
    };
}

Detail.$inject = ['$scope', '$document', '$http', 'SERVER', '$location', '$state'];
