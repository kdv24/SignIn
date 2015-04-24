signIn.factory('AttendanceFactory', function AttendanceFactory() {
    var factory = {};
    factory.students = [];

    factory.isHere = function(){
        var student = { }
        factory.students.push(student);
    };
    return factory;
});
