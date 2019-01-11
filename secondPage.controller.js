(function(){
    "use strict";

testApp.controller('SecondCtrl', secondCtrl);

secondCtrl.$inject = [
    '$scope',
    'someData',
    'Upload',
    '$state'
];

function secondCtrl(
    $scope,
    someData,
    Upload,
    $state
){

    $scope.second = {
        name: 'Addy Osmani',
        originalImg: '',
        croppedImg: '',
        data: someData,
        pushData: pushData,
        localData: [],
        pic: '/assets/images/Roger.jpg',
        uploadingFiles: uploadingFiles,
        files: ''
    };

    // $scope.state = $state;
    // console.log('$scope.state: ',$scope.state,  $scope.state.current.name);

        function pushData(data){
        console.log('innn');
        $scope.second.localData.push(data);
    }

    function uploadingFiles(file, invalidFiles) {
        var invalidFile = {}, invalidFileLength = 0;
        if (invalidFiles.length > 0 && invalidFiles.length !== invalidFileLength) {
            invalidFileLength = invalidFiles.length;
            invalidFile = invalidFiles.pop();
            if (invalidFile['$error'] === 'pattern') {
                // $scope.second.isFileFormateValid = false;
                // $scope.second.isMaxFileSizeLimitReached = false;
            }
            if (invalidFile['$error'] === 'maxSize') {
                // $scope.second.isFileFormateValid = true;
                // $scope.second.isMaxFileSizeLimitReached = true;
            }
        } else if (file) {
            // $rootScope.engagetoApp.isPageLoading = true;
            // $scope.second.isFileFormateValid = true;
            // $scope.second.isMaxFileSizeLimitReached = false;
            var file = file;
            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.second.files = evt.target.result;
                    // $scope.second.isFileSelected = true;
                    // $rootScope.engagetoApp.isPageLoading = false;
                });
            };
            reader.readAsDataURL(file);
        }
    }

}
}());