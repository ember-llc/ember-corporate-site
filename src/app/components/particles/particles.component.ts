import { Component } from "@angular/core";

@Component({
  selector: "ember-particles",
  templateUrl: "./particles.component.html",
  styleUrls: ["./particles.component.scss"]
})
export class ParticlesComponent {
  count = new Array(50);
}
