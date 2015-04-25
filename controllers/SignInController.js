signIn.controller("SignInCtrl", function SignInCtrl($scope, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;
    $scope.AttendanceFactory = AttendanceFactory;
    $scope.studentPresent=function(student){
        student.present=true;
    };
    $scope.studentAbsent=function(student){
        student.present=false;
    };
});
