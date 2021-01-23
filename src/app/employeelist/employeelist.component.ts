import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";

@Component({
  selector: "app-employeelist",
  templateUrl: "./employeelist.component.html",
  styleUrls: ["./employeelist.component.css"],
})
export class EmployeelistComponent implements OnInit {
  employees: Employee[];
  selectedEmployeeCountRadioButton = "All";
  constructor() {
    this.employees = [
      {
        empid: 123,
        ename: "Shwetha",
        gender: "Female",
        salary: 67854,
        dob: "12-12-2019",
      },
      {
        empid: 124,
        ename: "Akilesh",
        gender: "Male",
        salary: 67854,
        dob: "2-12-2019",
      },
      {
        empid: 125,
        ename: "Anusha",
        gender: "Female",
        salary: 4567854,
        dob: "1-12-2019",
      },
      {
        empid: 126,
        ename: "Krishna",
        gender: "Male",
        salary: 167854,
        dob: "12-1-2019",
      },
      {
        empid: 127,
        ename: "Faisal",
        gender: "Male",
        salary: 69854,
        dob: "12-2-2019",
      },
      {
        empid: 128,
        ename: "Amulya",
        gender: "Female",
        salary: 679854,
        dob: "5-12-2019",
      },
      {
        empid: 129,
        ename: "Karan",
        gender: "Male",
        salary: 6778854,
        dob: "7-12-2019",
      },
    ];
  }

  ngOnInit() {}

  getEmployees(): void {
    this.employees = [
      {
        empid: 123,
        ename: "Shwetha",
        gender: "Female",
        salary: 67854,
        dob: "12-12-2019",
      },
      {
        empid: 124,
        ename: "Akilesh",
        gender: "Male",
        salary: 67854,
        dob: "2-12-2019",
      },
      {
        empid: 125,
        ename: "Anusha",
        gender: "Female",
        salary: 4567854,
        dob: "1-12-2019",
      },
      {
        empid: 126,
        ename: "Krishna",
        gender: "Male",
        salary: 167854,
        dob: "12-1-2019",
      },
      {
        empid: 127,
        ename: "Faisal",
        gender: "Male",
        salary: 69854,
        dob: "12-2-2019",
      },
      {
        empid: 128,
        ename: "Amulya",
        gender: "Female",
        salary: 679854,
        dob: "5-12-2019",
      },
      {
        empid: 129,
        ename: "Karan",
        gender: "Male",
        salary: 6778854,
        dob: "7-12-2019",
      },
      {
        empid: 139,
        ename: "Deepish",
        gender: "Male",
        salary: 6778854,
        dob: "8-12-2019",
      },
    ];
  }

  trackByEmpid(index: number, employee: Employee) {
    return employee.empid;
  }

  onEmployeeCountRadioButtonChnage(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === "Male").length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === "Female").length;
  }
}
