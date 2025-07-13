import { Java } from './Subjects/Java';
/// <reference path="./Subjects/React.ts" />
/// <reference path="./Subjects/Java.ts" />
/// <reference path="./Subjects/Cpp.ts" />

export const java =new Subjects.Java();
export const react = new Subjects.React();
export const cpp  = new Subjects.Cpp();


const cTeacher : Subjects.Teacher = {
    firstName: "MOkete",
    lastName: "Tyabekana",
    experienceTeaching: 10,
}


const cpp1 =new Subjects.Cpp();
console.log("C++");

cpp1.setTeacher(cTeacher);
cpp1.getRequirements();
cpp1.getAvailableTeacher(cTeacher);

const Java = new Subjects.Java();
console.log("Java");

Java.setTeacher(cTeacher);
java.getRequirements();
java.getAvailableTeacher(cTeacher);

const react1 = new Subjects.React();
console.log("React");

react1.setTeacher(cTeacher);
react1.getRequirements();
react1.getAvailableTeacher(cTeacher);