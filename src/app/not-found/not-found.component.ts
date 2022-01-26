import {Component} from "@angular/core";

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-wrapper">
        <span class="not-found-icon">
            <i class="fas fa-frown"></i>
        </span>
      <span class="not-found-text">
        Sorry, the specified city was not found..
      </span>
    </div>
  `,
  styles: [`
    .not-found-wrapper {
      max-width: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 100px auto 0;
      padding: 20px;
      position: relative;
      border-radius: 10px;
      top: 20px;
      background-color: rgba(255, 255, 255, 0.3);
      opacity: 0;
      visibility: hidden;
      animation: resultFadeIn 0.5s 1.4s forwards;
    }
    @keyframes resultFadeIn {
      to {
        opacity: 1;
        visibility: visible;
        top: 0;
      }
    }
    .not-found-icon {
      display: block;
      text-align: center;
      color: #ffffff;
      font-size: 40px;
      margin-right: 10px;
    }
    .not-found-text {
      color: #ffffff;
      font-size: 17px;
    }
  `]
})
export class NotFoundComponent {}
