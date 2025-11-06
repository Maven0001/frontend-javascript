interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // contract: boolean;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: "London",
  contract: false,
};

/////////////////////TASK 02//////////////
interface Director extends Teacher {
  numberOfReports: number;
}

/////////////////////TASK 03//////////////

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  firstName = firstName.charAt(0);
  return `${firstName}. ${lastName}`;
}

/////////////////////TASK 04//////////////

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass {
  private firstName: string;
  private lastName: string;

  // Constructor matches StudentConstructor interface
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Returns "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Returns the student's first name
  displayName(): string {
    return this.firstName;
  }
}

/////////////////////TASK 05//////////////

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a Coffee drink";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherrTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number) {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

/////////////////////TASK 06//////////////

function isDirector(employee: Director | Teacher) {
  return employee as Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
