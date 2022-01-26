import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 [ngClass]="[secondary ? 'secondary' : '', showResult ? 'showResult' : '']">
      <ng-content></ng-content>
    </h1>
  `,
  styles: [`
    h1 {
      display: block;
      height: 64px;
      margin: 0;
      padding: 20px 0;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      transition: 0.3s 1.4s;
    }

    .secondary {
      opacity: 1;
      height: auto;
      position: relative;
      padding: 20px 0;
      font-size: 30px;
      top: 20%;
      text-align: center;
      transition: .5s;
    }

    .showResult {
      opacity: 0;
      visibility: hidden;
      top: 10%;
    }
    @media screen and (min-width: 768px) {
        .secondary {
          font-size: 40px;
        }
    }
    @media screen and (min-width: 1024px) {
      .secondary {
        font-size: 50px;
      }
    }
    @media screen and (min-width: 1440px) {
      .secondary {
        font-size: 60px;
      }
    }
    @media screen and (min-width: 2560px) {
      .secondary {
        font-size: 70px;
      }
    }
  `]
})
export class AppTitleComponent implements OnInit {
  @Input() secondary= false;
  @Input() showResult: boolean | null = false;

  constructor() { }

  ngOnInit(): void {
  }

}
