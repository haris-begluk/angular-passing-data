import { DataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  message: string;

  constructor(private data: DataService) {}
  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
  receiveMessage($event) {
    this.message = $event;
  }
}
