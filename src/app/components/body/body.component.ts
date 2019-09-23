// tslint:disable-next-line: quotemark
import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-body",
  // tslint:disable-next-line: quotemark
  templateUrl: "./body.component.html"
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };

  personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
