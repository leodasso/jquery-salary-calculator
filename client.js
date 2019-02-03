class employee {
    constructor(firstName, lastName, id, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }

    // returns the html to display this emlployee in a table
    generateTableHtml(index) {

        return `
        <tr class="employeeRow" data-index=${index}>
            <td>${this.firstName}</td>
            <td>${this.lastName}</td>
            <td>${this.id}</td>
            <td>${this.title}</td>
            <td>${this.salary}</td>
            <td><button class="deleteButton">X</button></td>
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
    refreshEmployeeTable();
    $('#addEmployee').on('click', createEmployee);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployee);
}

// creates a new employee using the inputs on the page
function createEmployee() {

    let firstName = $('#firstName');
    let lastName = $('#lastName');
    let id = $('#id');
    let title = $('#title');
    let salary = $('#salary');

    let newEmployee = new employee(firstName.val(), lastName.val(), id.val(), title.val(), salary.val());
    employees.push(newEmployee);
    
    // clear the values of the input fields
    firstName.val('');
    lastName.val('');
    id.val('');
    title.val('');
    salary.val('');

    refreshEmployeeTable();
}

function deleteEmployee() {

    let employeeElement = $(this).closest('.employeeRow');
    console.log('selected employee at index', employeeElement.data('index'));
    
}

// Cycles through all the employees in the list, and refreshes the dom
function refreshEmployeeTable() {

    let employeeTable = $('#employeeTable');
    employeeTable.empty();

    // use the index to set a data attribute so we know which index
    // in the employees array the html element relates to
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeTable.append(employee.generateTableHtml(i));
    }
}