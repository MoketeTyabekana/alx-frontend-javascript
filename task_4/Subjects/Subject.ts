// <reference path="./Teacher.ts" />

namespace Subject {
    export class Subjects{
        public teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}