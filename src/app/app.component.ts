import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Vaporizer', 'IPA', 5, 7.2),
    new Keg('Bud Light', 'Pilsner', 3, 3.3),
    new Keg('Two Towns', 'Cider', 6.5, 6.9)
  ]

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
}
