import {Component, Input} from "@angular/core";

@Component({
  selector: 'text',
  template: `
    <span [style.font-size]="fontSize" [style.text-align]="align" [ngClass]="firstToUpperCase ? 'firstToUpperCase' : ''">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    span {
      color: #ffffff;
      display: block;
    }
    .firstToUpperCase:first-letter {
      text-transform: uppercase;
    }
    @media screen and (min-width: 768px) {
    span {
      font-size: 15px !important;
    }
  }
  @media screen and (min-width: 1024px) {
    span {
      font-size: 17px !important;
    }
  }
  @media screen and (min-width: 1440px) {
    span {
      font-size: 19px !important;
    }
  }
  `]
})
export class TextComponent {
  @Input() fontSize = '12px';
  @Input() align = 'left';
  @Input() firstToUpperCase = false;
}
