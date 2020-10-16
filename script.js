/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {
    const company = new Company();
    // add fieldSet - forms and buttonns
    const fieldset = $('<fieldset></fieldset>');
    const forms = $("<form></form>").css({
        'display': 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'space-around',
        'text-align': 'center'
    });
    const inputId = $('<input/>').attr({type: 'text', autofocus: true });
    const inputFirstName = $('<input/>').attr({ type: 'text', autofocus: true });
    const inputLastName = $('<input/>').attr({ type: 'text', autofocus: true });
    const inputAge = $('<input/>').attr({ type: 'text', autofocus: true });
    const inputSalary = $('<input/>').attr({ type: 'text', autofocus: true });
    const labelId = $('<label></label>').text('Id').append($('<br></br>'), inputId);
    const labelFirstName = $('<label></label>').text('First Name').append($('<br></br>'), inputFirstName);
    const labelLastName = $('<label></label>').text('Last Name').append($('<br></br>'), inputLastName);
    const labelAge = $('<label></label>').text('Age').append($('<br></br>'), inputAge);
    const labelSalary = $('<label></label>').text('Salary').append($('<br></br>'), inputSalary);
    forms.append(labelId, labelFirstName, labelLastName, labelAge, labelSalary);

    // create buttons
    const buttons = $("<div></div>").css('margin', '1em');
    const addEmplButton = $('<button></button>').text('Add Employee');
    const showCompanyButton = $('<button></button>').text('Show Company');
    const getStatsButton = $('<button></button>').text('Get Stats');
    buttons.append(addEmplButton, showCompanyButton, getStatsButton);
    buttons.children().css({'margin-right':'1em', 'border-color': 'green'});
    fieldset.append(forms, $('<br></br>'), buttons);

    // Employee list and stats
    const employeesList = $('<ol></ol>').text('Employees List:').css({'font-size': '1.5em', 'list-style-type': 'none', 'background-color': 'rgb(166, 200, 253)'});
    const stats = $('<ul></ul>').text('Stats:').css({'font-size': '1.5em', 'list-style-type': 'none', 'background-color': 'rgb(161, 183, 93)'});
    //$('li').children().css({'font-size':'0.8em', 'margin-top':'1em', 'color': 'rgb(120, 120, 120)'});
    
    
    $('#root').append(fieldset, employeesList, stats);
    

    //setUp buttons on clicks
    addEmplButton.on('click', function () {
        const id = inputId.val();
        const firstName = inputFirstName.val();
        const lastName = inputLastName.val();
        const age = inputAge.val();
        const salary = inputSalary.val();
        company.addEmployee(new Employee(id, firstName, lastName, age, salary));
        clearInputs();
    });

    showCompanyButton.on('click', function () {
        employeesList.children().remove();
        
        const employees = company.showCompany();
        employees.forEach(element => {employeesList.append(
            $('<li></li>').append(`
            id = ${element.id}, lastName = ${element.lastName},
            firstName = ${element.firstName}, age = ${element.age}, salary = ${element.salary}`)
            .css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
        });
    });

    getStatsButton.on('click', function () {
        stats.children().remove();
        let statistics = company.getStats();
        stats.append($('<li></li>').append(`Total Salary: ${statistics[0]}`).css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
        stats.append($('<li></li>').append(`Average salary: ${statistics[1]}`).css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
        stats.append($('<li></li>').append(`Quntity of employees: ${statistics[2]}`).css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
        stats.append($('<li></li>').append(`Min Age: ${statistics[3]}`).css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
        stats.append($('<li></li>').append(`Max Age${statistics[4]}`).css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
        stats.append($('<li></li>').append(`Average Age: ${statistics[5]}`).css({'font-size':'0.8em', 'margin':'0.5em', 'color': 'rgb(120, 120, 120)'}));
    });    

    function clearInputs() {
        inputId.val('');
        inputFirstName.val('');
        inputLastName.val('');
        inputAge.val('');
        inputSalary.val('');
    }

});







