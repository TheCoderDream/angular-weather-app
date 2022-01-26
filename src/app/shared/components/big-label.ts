import {Component, Input} from "@angular/core";

@Component({
  selector: 'big-label',
  template: `
    <h2 [style.font-weight]="weight" [style.font-size]="fontSize" [style.text-align]="align">
      <ng-content></ng-content>
    </h2>
  `,
  styles: [`
    h2 {
      color: #ffffff;
      display: block;
      padding: 5px 0;
    }
    @media screen and (min-width: 768px) {
    h2 {
      font-size: 37px !important;
    }
  }
  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 43px !important;
    }
  }
  @media screen and (min-width: 1440px) {
    h2 {
      font-size: 52px !important;
    }
  }
  `]
})
export class BigLabelComponent {
  @Input() weight = '600';
  @Input() fontSize = '30px';
  @Input() align = 'left';
}
