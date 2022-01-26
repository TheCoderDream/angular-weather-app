import {Component, Input} from "@angular/core";

@Component({
  selector: 'small-label',
  template: `
    <h4 [style.font-weight]="weight" [style.font-size]="fontSize" [style.text-align]="align" [ngClass]="firstToUpperCase ? 'firstToUpperCase' : ''">
      <ng-content></ng-content>
    </h4>
  `,
  styles: [`
    h4 {
      color: #ffffff;
      display: block;
      padding: 5px 0;
    }
    .firstToUpperCase:first-letter {
      text-transform: uppercase;
    }
    @media screen and (min-width: 768px) {
    h4 {
      font-size: 20px !important;
    }
  }
  @media screen and (min-width: 1024px) {
    h4 {
      font-size: 23px !important;
    }
  }
  @media screen and (min-width: 1440px) {
    h4 {
      font-size: 26px !important;
    }
  }
  `]
})
export class SmallLabelComponent {
  @Input() weight = '600';
  @Input() fontSize = '15px';
  @Input() align = 'left';
  @Input() firstToUpperCase = false;
}
