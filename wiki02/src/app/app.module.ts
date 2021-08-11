import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BaseService} from "./shared/base.service";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoadingComponent} from "./loading/loading.component";
import {LoadingInterceptor} from "./loading/loading.interceptor"


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule],
  providers: [
    BaseService,
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
