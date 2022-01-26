import {Injectable} from "@angular/core";
import {BehaviorSubject, finalize, from, Observable, tap} from "rxjs";
import {createApi} from "unsplash-js";
import {VeryBasic} from "unsplash-js/dist/methods/photos/types";
import {ApiResponse} from "unsplash-js/dist/helpers/response";
import {Photos} from "unsplash-js/dist/methods/search/types/response";

const unsplash = createApi(
  {
    accessKey: '2J5p-V98wBnLNnbi0P5U_noLosW515GU8qoS7pvQd-Q',
    fetch,
  }
);

export interface BgPhotoUrls {
  small: string;
  full: string;
}

@Injectable({
  providedIn: 'root'
})
export class LazyLoadedImageServices {
  private currentImageUrlSubject$ = new BehaviorSubject<BgPhotoUrls>({full: './assets/2850815.jpg', small: './assets/2850815.jpg'});
  private isLoadedSubject$ = new BehaviorSubject<boolean>(false);
  currentImageUrls$ = this.currentImageUrlSubject$.asObservable();
  isLoaded$ = this.isLoadedSubject$.asObservable();

  setCurrentImageUrls(imgUrls: BgPhotoUrls): void {
    this.currentImageUrlSubject$.next(imgUrls);
  }

  getCurrentImageUrls(): Observable<BgPhotoUrls> {
    return this.currentImageUrls$;
  }

  setIsLoadedState(loaded: boolean) {
    this.isLoadedSubject$.next(loaded);
  }

  fetchImageByCity(query: string): Observable<ApiResponse<Photos>> {
    return from(
      unsplash.search.getPhotos(
        {
          query,
          orderBy: 'relevant'
        }
      )
    ).pipe(
      tap(result => {
        this.isLoadedSubject$.next(false);
        if (result.type === 'success' && result.response.results.length) {
          const photos = result.response.results[0].urls;

          this.setCurrentImageUrls(photos);
          const img = new Image();
          img.src = photos.full;
          img.onload = () => {
            this.isLoadedSubject$.next(true);
          }
        }
      })
    );
  }
}
