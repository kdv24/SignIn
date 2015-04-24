signIn.controller("WhoIsHereCtrl", function WhoIsHereCtrl($scope, $stateParams, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;
});
