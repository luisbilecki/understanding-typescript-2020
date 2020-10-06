class Department {
  name: string;
  private employees: string[]  = [];

  constructor (n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting');

accounting.describe();

console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Luis');

// accounting.employees[2] = 'Ana';

accounting.printEmployeeInformation();
// const accountingCopy = { name: 'Luís', describe: accounting.describe };
// accountingCopy.describe();
