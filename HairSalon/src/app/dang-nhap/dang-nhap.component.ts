import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {

  constructor(private router:Router) { }
  onDangNhap(){
    this.router.navigate(['thong-tin-ca-nhan'])
  }
  ngOnInit(): void {
  }

}
