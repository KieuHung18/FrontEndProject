import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgForm} from "@angular/forms";
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    DichVuComponent,
    DangNhapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
