var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work directly";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
