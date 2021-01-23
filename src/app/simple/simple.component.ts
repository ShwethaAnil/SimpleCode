import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-simple",
  template: "You entered {{simpleInput}}",
  styleUrls: ["./simple.component.css"],
})
export class SimpleComponent implements OnInit, OnChanges {
  @Input()
  simpleInput: string;
  constructor() {
    console.log("Constructor ");
  }

  ngOnInit() {
    console.log("OnInit lifecycle called");
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propertyName in changes) {
      const change = changes[propertyName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);
      console.log("Current" + current + " previous " + previous);
    }
  }
}
