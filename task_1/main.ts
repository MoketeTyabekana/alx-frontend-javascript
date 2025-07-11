// This is an interface for a TypeScript project that uses Webpack, ESLint, and TypeScript configuration files. The code includes comments indicating the purpose of each file and the changes made to them.


interface Teacher{
    firstName: string;
    lastName: string;
    yearsOfExperience: number;
    fullTimeEmployee: boolean;
    location: string;
    contract:boolean;
}

const teacher1: Teacher = {
    firstName: "Mokete",
    lastName: "Tyabekana",
    yearsOfExperience: 4,
    fullTimeEmployee: true,
    location: "Midrand",
    contract: false,
}

console.log(teacher1);


interface Directors extends Teacher {
    numberOfReports: number; 
}

const director1: Directors = {
    firstName: "Mpho",
    lastName: "Tyabekana",
    yearsOfExperience: 2,
    fullTimeEmployee: false,
    location: "Bloemfontein",
    contract: false,
    numberOfReports: 5,
}



function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;

}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;  
}