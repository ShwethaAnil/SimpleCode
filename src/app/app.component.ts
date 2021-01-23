import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // template: `<h1 appRainbow>Employee Details</h1>
  //   You entered : <input type="text" [(ngModel)]="userText" />
  //   <app-simple [simpleInput]="userText"></app-simple>
  //   <button appRainbow style="color:red" [style.font-size.px]="fontSize">
  //     MyButton
  //   </button>
  //   <button style="color:blue" [ngStyle]="addStyles()">MyButton</button>
  //   <button class="colorClass" [ngClass]="addClasses()">MyButton</button>
  //   <br />
  //   <br />
  //   <div style="border:3px solid green;width:25%">
  //     <app-employee></app-employee>
  //   </div>
  //   <div style="border:3px solid blue;">
  //     <app-employeelist></app-employeelist>
  //   </div> `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userText = " SpringPeople";
  title = "firstproject";
  fontSize = 30;
  isBold = true;
  isItalics = true;

  applyBoldClass = true;
  applyItalicsClass = true;

  addClasses() {
    const classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass,
    };
    return classes;
  }

  addStyles() {
    let styles = {
      "font-weight": this.isBold ? "bold" : "normal",
      "font-style": this.isItalics ? "italic" : "normal",
      "font-size.px": this.fontSize,
    };
    return styles;
  }

  //ngClass
}
