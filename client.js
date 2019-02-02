console.log('js');

class employee {
    constructor(firstName, lastName, id, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }
}

// create a list to store all the employee objects
// fill with some placeholder employees
let employees = [
    new employee("Greg", "Sanchez", 29183, "Clock Fixer", 88000),
    new employee("Maria", "Smith", 8854, "Rainmaker", 120000),
    new employee("Scott", "Blankenship", 5473, "Coffee Tester", 45000)
];


$(document).ready(onReady);

function onReady() {
    console.log('javascript is ready');
    
}

// Cycles through all the employees in the list, and refreshes the dom
function refreshEmployeeTable() {

    // TODO show row for each employee

    

}