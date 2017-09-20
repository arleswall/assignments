var employees = [];


function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function(){
        console.log("The employee name is " + this.name + ", he's a " + this.jobTitle + " making " + this.salary + " working " + this.status + ".");
    }
}

var person = new Employee("Bob", "teacher", "$3000");
employees.push(person);

var person1 = new Employee("Arles", "student", "-$14k");
employees.push(person1);

var person2 = new Employee("Erick", "Uber Driver", "$40k", "Part time");
employees.push(person2);



console.log(employees);


person.printEmployeeForm();
person1.printEmployeeForm();
person2.printEmployeeForm();