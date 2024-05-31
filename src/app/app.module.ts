import { ApplicationRef, APP_INITIALIZER, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent as WebComponent } from './app.component';
import { AppReducer } from './state/app.reducer';
import { LoaderComponent } from './shared/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './modules/auth/component/login.component';
import { RegisterComponent } from './modules/auth/component/register.component';
import { RegisterReducer } from './modules/auth/store/auth.reducer';
import { RegisterEffects } from './modules/auth/store/auth.effect';
import { SharedService } from './shared/service/shared.service';
import { MobileComponent } from './mobile.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';
import { WebSeriesDetailComponent } from './shared/web-series-detail/web-series-detail.component';
import { DetailComponent } from './shared/details/detail.component';
import { DetailDirective } from './shared/directives/detail.directive';
import { favoriteMovieReducer } from './modules/favorite/state/favorite.reducer';

function initializeAppFactory(sharedService: SharedService) {
  return function () { 
    return sharedService.appInit();
  }
}

function initializeAppFactory2() {
  return function() {
    return new Promise<void>((resolve, reject) => {
      console.log("Inside initializeAppFactory2");
      setTimeout(() => {
        console.log("Resolve initializeAppFactory2");
        resolve();
      }, 1000);
    })
  }
}
@NgModule({
  declarations: [
    WebComponent,
    MobileComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    NotificationComponent,
    MovieDetailComponent,
    WebSeriesDetailComponent,
    DetailComponent,
    DetailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      loading: AppReducer,
      userData: RegisterReducer,
      favorite: favoriteMovieReducer
    }),
    EffectsModule.forRoot([RegisterEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [SharedService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initializeAppFactory2
    }
  ],
  // bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  // Load root component dynamically on the basis of conditions
  ngDoBootstrap(appRef: ApplicationRef) {
    const APP: any = (window.innerWidth > 300) ? WebComponent : MobileComponent;
    appRef.bootstrap(APP, document.getElementById('app'));
  }
}
