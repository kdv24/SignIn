signIn.controller("SignInCtrl", function SignInCtrl($scope, $stateParams, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;
    $scope.AttendanceFactory = AttendanceFactory;
    $scope.studentPresent=function(item){
        item.present=true;
    };
    $scope.studentAbsent=function(item){
        item.present=false;
    };
});
