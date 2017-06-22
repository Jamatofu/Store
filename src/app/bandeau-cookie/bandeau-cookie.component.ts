import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeau-cookie',
  templateUrl: './bandeau-cookie.component.html',
  styleUrls: ['./bandeau-cookie.component.css']
})
export class BandeauCookieComponent implements OnInit {
  public isOk: boolean;

  constructor() { }

  ngOnInit() {
  }

  public fermerBandeau() {
    this.isOk = !this.isOk;
  }
}
