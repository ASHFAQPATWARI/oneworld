import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppsettingsPage } from '../pages/appsettings/appsettings';
import { HomepagePage } from '../pages/homepage/homepage';
import { OrdersPage } from '../pages/orders/orders';
import { OrderonmapPage } from '../pages/orderonmap/orderonmap';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DeliveredOrdersPage } from '../pages/delivered-orders/delivered-orders';

@NgModule({
  declarations: [
    MyApp,
    HomepagePage,
    OrdersPage,
    OrderonmapPage,
    LoginPage,
    RegisterPage,
    OrderDetailPage,
    DeliveredOrdersPage,
    AppsettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomepagePage,
    OrdersPage,
    OrderonmapPage,
    LoginPage,
    RegisterPage,
    OrderDetailPage,
    DeliveredOrdersPage,
    AppsettingsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
