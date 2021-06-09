import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-abou-us',
  templateUrl: './abou-us.component.html',
  styleUrls: ['./abou-us.component.css']
})
export class AbouUSComponent implements OnInit {

  constructor(private router:Router) { }
  onDichVu(){
    this.router.navigate(['dich-vu'])
  }
  ngOnInit(): void {
  }

}
