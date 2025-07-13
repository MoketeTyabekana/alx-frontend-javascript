
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    class React extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        public getAvailableTeacher(teacher: Teacher): string {
            if (teacher.experienceTeachingReact === undefined || teacher.experienceTeachingReact === 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${teacher.firstName}`;
        }
    }
}











