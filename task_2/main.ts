

interface DirectorInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string;
}

interface TeacherInterface {
    workFromHome():string;
    getCoffeeBreak():string;
    workTeacherTasks ():string;
}

class Director implements DirectorInterface {
    workFromHome():string {
        return "Working from home";
    }

    getCoffeeBreak():string {
        return "Getting a coffee break";
    }

    workDirectorTasks():string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome():string {
        return "Cannot work from home";
    }

    getCoffeeBreak():string {
        return "Getting a coffee break";
    }

    workTeacherTasks ():string {
        return "Getting to work directly";
    }
}

function createEmployee (salary:number): DirectorInterface | TeacherInterface {
    if (salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }

}

function isDirector(employee:DirectorInterface| TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

function teachClass(todayClass : string): string {
    return todayClass  === "Monday" || todayClass  === "Tuesday" ? "Teaching Math" : "Teaching History";
}