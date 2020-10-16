/// <reference path="../typings/globals/jquery/index.d.ts" />

class Employee {
    constructor(id, firstName, lastName, age, salary) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = +age;
        this._salary = +salary;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = +age;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = +value;
        }
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        if (this._employees.findIndex(item => item.id === employee.id) < 0) {
            this._employees.push(employee);
        }
    }

    showCompany() {
        return [...this._employees];
    }

    getStats() {
        const totalSalary = this._employees.reduce((sum, empl) => sum + empl.salary, 0);
        const avgSalary = totalSalary / this._employees.length;
        const quantity = this._employees.length;
        const minAge = this._employees.reduce((min, empl) => empl.age < min.age ? empl : min, this._employees[0]).age;
        const maxAge = this._employees.reduce((max, empl) => empl.age > max.age ? empl : max, this._employees[0]).age;
        const avgAge = this._employees.reduce((sum, empl) => sum + empl.age, 0) / this._employees.length;
        let arr = [totalSalary, avgSalary, quantity, minAge, maxAge, avgAge];
        return arr;

    }
}








