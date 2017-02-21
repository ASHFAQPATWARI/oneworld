import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { OrderDetailPage } from '../order-detail/order-detail';

/*
  Generated class for the Orders page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {

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
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  showOrderDetails(order) {
    let modal = this.modalCtrl.create(OrderDetailPage, { order: order });
    modal.present();
  }

}
