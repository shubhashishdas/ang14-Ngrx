import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './state/app.reducer';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './modules/auth/component/login.component';
import { RegisterComponent } from './modules/auth/component/register.component';
import { RegisterReducer } from './modules/auth/store/auth.reducer';
import { RegisterEffects } from './modules/auth/store/auth.effect';
import { SharedService } from './shared/service/shared.service';
import { FirstService } from './shared/service/first.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      loading: AppReducer,
      userData: RegisterReducer,
    }),
    EffectsModule.forRoot([RegisterEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
