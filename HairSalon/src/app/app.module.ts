import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, NgForm} from "@angular/forms";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { NgxPaginationModule } from "ngx-pagination";
import { SanPhamComponent } from "./san-pham/san-pham.component";
import { AbouUSComponent } from './abou-us/abou-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    DichVuComponent,
    SanPhamComponent,
    DangNhapComponent,
    AbouUSComponent

  ],
  imports: [
    BrowserModule, NgxPaginationModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
