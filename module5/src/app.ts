class Department {
  static fiscalYear = 2020;

  // private readonly id: string;
  // private name: string;
  protected employees: string[]  = [];

  constructor (
    private readonly id: string,
    public name: string
  ) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {
      name
    }
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    const hasNoValue: boolean = !value
    if (hasNoValue) {
      throw new Error('Please pass in a valid value!');
    }

    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }

    super.addEmployee(name);
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Luis');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.describe();

it.addEmployee('Max');
it.addEmployee('Luis');

console.log(it);

// accounting.employees[2] = 'Ana';

it.printEmployeeInformation();
// const accountingCopy = { name: 'Luís', describe: accounting.describe };
// accountingCopy.describe();


const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Most recent is october report!';

// accounting.mostRecentReport = '';

accounting.addReport('New report here!');

accounting.addEmployee('Max');

accounting.printReports();

console.log(accounting.mostRecentReport)
