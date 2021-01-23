import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent {
  eid = 103;
  ename = "Shwetha";
  gender = "female";
  salary = 567899;
  dob = "03-11-1987";
  isDisabled = false;
  header = "He Hello <b>Shwetha</b>";
  showDetails = false;

  login(): void {
    alert("Hi");
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
