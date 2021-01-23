import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Employee } from "../employee";

@Component({
  selector: "app-addemployee",
  templateUrl: "./addemployee.component.html",
  styleUrls: ["./addemployee.component.css"],
})
export class AddemployeeComponent {
  employee: Employee = new Employee();

  constructor() {}

  saveEmployee() {
    console.log(JSON.stringify(this.employee));
  }
}
