app.controller("toujoursAppCtrl", function($scope){
    $scope.x = 0;
    $scope.y = 0;
    $scope.sum = function(){return $scope.x + $scope.y};
    $scope.minus = function(){return $scope.x - $scope.y};
    $scope.total = function(){return $scope.x * $scope.y};
    $scope.divide = function(){
        if($scope.y === 0){
            return  "Can't divide by 0"
        }else{
        return $scope.x / $scope.y}
    }
    });