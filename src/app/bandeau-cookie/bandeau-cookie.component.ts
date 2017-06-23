import { Component, OnInit } from '@angular/core';
import {Cookie} from "ng2-cookies";

@Component({
  selector: 'app-bandeau-cookie',
  templateUrl: './bandeau-cookie.component.html',
  styleUrls: ['./bandeau-cookie.component.css']
})
export class BandeauCookieComponent implements OnInit {
  public isOk: boolean;
  public yetAccepted: boolean;

  constructor() { }

  ngOnInit() {
    this.isYetAccepted();
  }

  // TODO Faire en sorte qu'on crée un cookie

  public fermerBandeau() {
    this.isOk = !this.isOk;
    Cookie.set("acceptedLawCondition", "true", 7);
  }

  public isYetAccepted() {
    console.log(Cookie.check("acceptedLawCondition"));
    this.yetAccepted = Cookie.check("acceptedLawCondition");
  }
}
