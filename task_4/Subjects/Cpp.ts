/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
}


class Cpp extends Subjects.Subject {
    public getRequirements (): string {
        return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher (teacher: Subjects.Teacher): string {
        if (teacher.experienceTeachingC === undefined || teacher.experienceTeachingC === 0) {
            return "No available teacher";
        }
        return `Available Teacher: ${teacher.firstName}`;
        
    }
}


