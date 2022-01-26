import {ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {BgPhotoUrls, LazyLoadedImageServices} from "../services/lazy-loaded-image.services";
import {Subscription} from "rxjs";

@Component({
  selector: 'lazy-loaded-bg',
  template: `<ng-content></ng-content>`,
  styles: [
    `
    :host {
      padding: 0 20px;
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      filter: blur(2px) brightness(0.7);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transform: scale(1.1);
      transition: filter 300ms ease-in;
  }
    `
  ],
})
export class LazyLoadedBgComponent implements OnDestroy, OnInit {
  currentImageSource!: BgPhotoUrls;
  isImageLoaded!: boolean;
  sub!: Subscription;

  @HostBinding('style.background-image') get bgImage() {
    console.log('loaded', this.isImageLoaded ? this.currentImageSource.full : this.currentImageSource.small);
    return this.sanitizer.bypassSecurityTrustStyle(
      `url(${this.isImageLoaded ? this.currentImageSource.full : this.currentImageSource.small})`
    );
  }

  @HostBinding('style.filter') get filter() {
    return this.sanitizer.bypassSecurityTrustStyle(
      this.isImageLoaded ? 'filter: blur(2px) brightness(0.7)' : 'filter: blur(5px) brightness(0.7);'
    );
  }

  constructor(private sanitizer: DomSanitizer, private lazyLoadedImageServices: LazyLoadedImageServices, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.sub = this.lazyLoadedImageServices.isLoaded$.subscribe((isLoaded) => {
      console.log('loaded', isLoaded);
      this.isImageLoaded = isLoaded;
      this.cd.detectChanges();
    });
    this.sub.add(
      this.lazyLoadedImageServices.currentImageUrls$.subscribe((currentImageSource) => {
        this.currentImageSource = currentImageSource;
        this.cd.detectChanges();
      })
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
