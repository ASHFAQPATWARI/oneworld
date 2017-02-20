import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderonmapPage } from '../orderonmap/orderonmap';
import { OrdersPage } from '../orders/orders';

/*
  Generated class for the Homepage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
export class HomepagePage {

  orderOnMapTab: any = OrderonmapPage;
  ordersTab: any = OrdersPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }

}
