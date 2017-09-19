var employees = [];


function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(Employee[i]);
    }
}

var allEmployees = new Employee("Bob", "teacher", "$3000");
employees.push(allEmployees);

var allEmployees = new Employee("Arles", "student", "-$14k");
employees.push(allEmployees);

var allEmployees = new Employee("Erick", "Uber Driver", "$40k", this.status = "Part time");
employees.push(allEmployees);

console.log(employees);
//Employee.prototype.printEmployeeForm = function();