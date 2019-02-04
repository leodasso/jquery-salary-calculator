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

        let formattedSalary = Number(this.salary);
        formattedSalary = usdFormatter.format(formattedSalary);

        return `
        <tr class="employeeRow" data-index=${index}>
            <td>${this.firstName}</td>
            <td>${this.lastName}</td>
            <td>${this.id}</td>
            <td>${this.title}</td>
            <td class="salary">${formattedSalary}</td>
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

const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})


$(document).ready(onReady);

function onReady() {
    refreshEmployeeTable();
    $('#addEmployee').on('click', createEmployee);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployee);

    // mouse enter/leave events for the employee creator panel
    $('.employeeCreator').on('mouseenter', employeeCreatorHovered);
    $('.employeeCreator').on('mouseleave', employeeCreatorLeft);

}

function employeeCreatorHovered() {
    console.log('mouse enter');
    this.classList.add('active');
}

function employeeCreatorLeft() {
    this.classList.remove('active');
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
    let RemovalIndex = employeeElement.data('index');
    employees.splice(RemovalIndex, 1);
    refreshEmployeeTable();
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

    // refresh the total value per month
    let t = getMonthlyTotal();
    t = usdFormatter.format(t);
    $('#total').text(t);
}

// returns number
function getMonthlyTotal() {

    let yearlyTotal = 0;
    for (let employee of employees) {
        yearlyTotal += Number(employee.salary);
    }

    let monthly = yearlyTotal / 12;
    let totalElement = $('#total');
    console.log(totalElement[0]);
    
    if (monthly > 20000) {
        totalElement[0].classList.add('overBudget');
    }else {
        totalElement[0].classList.remove('overBudget');
    }
    return yearlyTotal / 12;
}