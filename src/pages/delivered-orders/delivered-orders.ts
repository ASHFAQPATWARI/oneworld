import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DeliveredOrders page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-delivered-orders',
  templateUrl: 'delivered-orders.html'
})
export class DeliveredOrdersPage {
  ordersList = [
    {
      customerName: 'Ashfaq',
      mobNo: 96692953,
      invoiceNo: 34575685
    },
    {
      customerName: 'Hussain',
      mobNo: 96692953,
      invoiceNo: 34575685
    },
    {
      customerName: 'Ramesh Raju',
      mobNo: 96692953,
      invoiceNo: 34575685
    },
    {
      customerName: 'Geeta Basra',
      mobNo: 96692953,
      invoiceNo: 34575685
    },
    {
      customerName: 'Yuvraj Singh',
      mobNo: 96692953,
      invoiceNo: 34575685
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveredOrdersPage');
  }

}
