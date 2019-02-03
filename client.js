console.log('js');

class employee {
    constructor(firstName, lastName, id, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }

    // returns the html to display this emlployee in a table
    generateTableHtml() {

        return `
        <tr>
            <td>${this.firstName}</td>
            <td>${this.lastName}</td>
            <td>${this.id}</td>
            <td>${this.title}</td>
            <td>${this.salary}</td>
            <td><button>X</button></td>
        </tr>`;
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
    refreshEmployeeTable();
    
}

// creates a new employee using the inputs on the page
function createEmployee() {

    let firstName = $('');
    let lastName;
    let id;
    let title;
    let salary;

}

// Cycles through all the employees in the list, and refreshes the dom
function refreshEmployeeTable() {

    let employeeTable = $('#employeeTable');
    employeeTable.empty();

    for (employee of employees) {
        employeeTable.append(employee.generateTableHtml());
    }
}