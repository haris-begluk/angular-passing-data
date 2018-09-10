import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent {
  constructor() {}
  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
