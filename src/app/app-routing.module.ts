import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddemployeeComponent } from "./addemployee/addemployee.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: "emp", component: EmployeeComponent },
  { path: "emps", component: EmployeelistComponent },
  { path: "add", component: AddemployeeComponent },
  { path: "", redirectTo: "/emps", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
