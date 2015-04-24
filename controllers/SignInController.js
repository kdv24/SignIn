signIn.controller("SignInCtrl", function SignInCtrl($scope, $stateParams, AttendanceFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
    }
});
