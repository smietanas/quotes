import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent {
  @Input() quotes: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({ quotation, value });
    //przy 2 paramatrach {} ?
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
