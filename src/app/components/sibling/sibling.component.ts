import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-sibling",
  templateUrl: "./sibling.component.html",
  styleUrls: ["./sibling.component.css"]
})
export class SiblingComponent implements OnInit {
  message: string;
  counter = 0;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
  newMessage() {
    this.data.changeMessage(
      "Hello from sibling, message:  " + (this.counter += 1)
    );
  }
}
