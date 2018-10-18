import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-sell-pint',
  templateUrl: './sell-pint.component.html',
  styleUrls: ['./sell-pint.component.css']
})
export class SellPintComponent {
  @Input() grandchildKegList: Keg;
  @Output() clickedSell = new EventEmitter();

  sellButtonClicked(currentKeg) {
    this.clickedSell.emit(this.grandchildKegList);
  }
}
