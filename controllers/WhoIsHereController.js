signIn.controller("WhoIsHereCtrl", function WhoIsHereCtrl($scope, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;
})
