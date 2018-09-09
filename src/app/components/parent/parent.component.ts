import { ChildComponent } from "./../child/child.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  parentMessage = "This is simple message from parent to child!";
  constructor() {}

  ngOnInit() {}
}
