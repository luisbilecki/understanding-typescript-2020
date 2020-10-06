class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[]  = [];

  constructor (
    private readonly id: string,
    public name: string
  ) {
    // this.id = id;
    // this.name = n;
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
  constructor(id: string, private reports: string[]) {
    super(id, 'IT');
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

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

accounting.addReport('New report here!');

accounting.printReports();
