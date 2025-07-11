// This is an interface for a TypeScript project that uses Webpack, ESLint, and TypeScript configuration files. The code includes comments indicating the purpose of each file and the changes made to them.


interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mokete",
    lastName: "Tyabekana",
    age: 31,
    location: "Midrand"
};

const student2: Student = {
    firstName: "Mpho",
    lastName: "Oganne",
    age: 27,
    location: "Randburg"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

});
