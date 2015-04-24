signIn.controller("SignInCtrl", function SignInCtrl($scope, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;
    $scope.checkIn = function(student) {
        student.present = true;
    }
});
