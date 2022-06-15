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
import { LoginComponent } from './modules/login/components/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/register/component/register.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { RegisterReducer } from './modules/register/store/register.reducer';

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
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
