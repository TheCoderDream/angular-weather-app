import {Component, Input} from "@angular/core";

@Component({
  selector: 'medium-label',
  template: `
    <h3 [style.font-weight]="weight" [style.font-size]="fontSize" [style.text-align]="align">
      <ng-content></ng-content>
    </h3>
  `,
  styles: [`
    h3 {
      color: #ffffff;
      display: block;
      padding: 5px 0;
    }
    @media screen and (min-width: 768px) {
    h3 {
      font-size: 23px !important;
    }
  }
  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 26px !important;
    }
  }
  @media screen and (min-width: 1440px) {
    h3 {
      font-size: 29px !important;
    }
  }
  `]
})
export class MediumLabelComponent {
  @Input() weight = '600';
  @Input() fontSize = '20px';
  @Input() align = 'left';
}
