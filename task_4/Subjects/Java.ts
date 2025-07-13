
namespace Subjects {

     export interface Teacher {
     experienceTeachingJava?: number;
 }

    class Java extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        public getAvailableTeacher(teacher: Teacher): string {
            if (teacher.experienceTeaching === undefined || teacher.experienceTeaching === 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${teacher.firstName}`;
        }
    }
}
