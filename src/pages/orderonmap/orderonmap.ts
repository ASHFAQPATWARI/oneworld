import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-orderonmap',
  templateUrl: 'orderonmap.html'
})
export class OrderonmapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    Geolocation.getCurrentPosition().then((resp) => {
      this.loading.dismiss();
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      //this.loading.dismiss();
    });
  }

  loadMap(lat, lang) {
    let latLng = new google.maps.LatLng(lat, lang);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }


}
