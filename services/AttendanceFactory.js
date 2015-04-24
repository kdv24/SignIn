signIn.factory('AttendanceFactory', function AttendanceFactory() {
    var factory = {};
    factory.students = [{name: factory.studentName, present: false}, {name: "Kelly", present: false}, {name: "Abeer", present: false}];
    return factory;
});
