import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChiTietSanPhamComponent} from "../chi-tiet-san-pham/chi-tiet-san-pham.component";
import {SanPhamComponent} from "../san-pham/san-pham.component";
import {GioHangComponent} from "../gio-hang/gio-hang.component";
import {ThanhToanComponent} from "../thanh-toan/thanh-toan.component";

const routes: Routes = [
  {path:'chi-tiet',component: ChiTietSanPhamComponent},
  {path:'san-pham',component: SanPhamComponent},
  {path:'gio-hang',component: GioHangComponent},
  {path:'thanh-toan',component: ThanhToanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
