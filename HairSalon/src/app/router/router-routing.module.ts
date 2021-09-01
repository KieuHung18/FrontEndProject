import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChiTietSanPhamComponent} from "../chi-tiet-san-pham/chi-tiet-san-pham.component";
import {SanPhamComponent} from "../san-pham/san-pham.component";
import {GioHangComponent} from "../gio-hang/gio-hang.component";
import {ThanhToanComponent} from "../thanh-toan/thanh-toan.component";
import {TrangChuComponent} from "../trang-chu/trang-chu.component";
import {AbouUSComponent} from "../abou-us/abou-us.component";
import {ContactComponent} from "../contact/contact.component";
import {DangKyComponent} from "../dang-ky/dang-ky.component";
import {DangNhapComponent} from "../dang-nhap/dang-nhap.component";
import {DichVuComponent} from "../dich-vu/dich-vu.component";
import {ThongTinCaNhanComponent} from "../thong-tin-ca-nhan/thong-tin-ca-nhan.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'about-us',component: AbouUSComponent},
  {path:'chi-tiet/:id',component: ChiTietSanPhamComponent},
  {path:'contact',component: ContactComponent},
  {path:'dang-ky',component: DangKyComponent},
  {path:'dang-nhap',component: DangNhapComponent},
  {path:'dich-vu',component: DichVuComponent},
  {path:'san-pham/:type',component: SanPhamComponent},
  {path:'gio-hang',component: GioHangComponent},
  {path:'thanh-toan',component: ThanhToanComponent},
  {path:'thong-tin-ca-nhan',component: ThongTinCaNhanComponent},
  {path:'trang-chu',component: TrangChuComponent},
  {path:'',redirectTo:'/trang-chu',pathMatch:'full'},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule {

}
