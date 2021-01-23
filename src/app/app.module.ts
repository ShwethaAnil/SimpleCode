import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { FormsModule } from "@angular/forms";
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { EmployeecountComponent } from './employeecount/employeecount.component';
import { RainbowDirective } from './rainbow.directive';
import { SimpleComponent } from './simple/simple.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EmployeelistComponent, EmployeeTitlePipe, EmployeecountComponent, RainbowDirective, SimpleComponent, PagenotfoundComponent, AddemployeeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
