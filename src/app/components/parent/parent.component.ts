import { ChildComponent } from "./../child/child.component";
import { Component, ViewChild, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent)
  child; //injecting child component in to parent component
  constructor() {}
  message: string;

  ngAfterViewInit() {
    //using AfterViewInit lifecycle hook to recive data from child
    this.message = this.child.childMessage; //copy child message to parent message
  }
}
