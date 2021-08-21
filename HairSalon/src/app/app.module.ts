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
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { ThongTinCaNhanComponent } from './thong-tin-ca-nhan/thong-tin-ca-nhan.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import {RouterRoutingModule} from "./router/router-routing.module";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    DichVuComponent,
    SanPhamComponent,
    DangNhapComponent,
    AbouUSComponent,
    DangKyComponent,
    ThongTinCaNhanComponent,
    GioHangComponent,
    ThanhToanComponent,
    ChiTietSanPhamComponent,
    TrangChuComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule, NgxPaginationModule, FormsModule,RouterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
