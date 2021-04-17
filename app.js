let app = angular.module("chavosApp",[]);

app.controller("chavosAppController", function($scope){
    $scope.characterCount = 0;
    
    $scope.characters = [
        "characters/barriga.jpg",
        "characters/chavo.jpg",
        "characters/chilindrina.jpg",
        "characters/quico.jpeg",
    ]

    $scope.previous = function(){
        $scope.characterCount = $scope.characterCount - 1;
    }
    $scope.next = function(){
        $scope.characterCount = $scope.characterCount + 1;
    }
});