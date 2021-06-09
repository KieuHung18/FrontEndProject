import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  constructor(private router:Router) { }
  onDangKy(){
    this.router.navigate(['dang-nhap'])
  }
  ngOnInit(): void {
  }

}
