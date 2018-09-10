import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent {
  message: string = "Hello from Child";
  counter = 0;
  @Output()
  messageEvent = new EventEmitter<string>();

  sendMessage() {
    let newmessage = this.message + " " + (this.counter += 1).toString();
    this.messageEvent.emit(newmessage);
  }
}
