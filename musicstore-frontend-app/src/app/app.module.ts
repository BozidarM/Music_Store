import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { InstrumentsComponent } from './products/instruments/instruments.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { AdditionalEquipmentComponent } from './products/additional-equipment/additional-equipment.component';
import { MusicSoftwaresComponent } from './products/music-softwares/music-softwares.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './orders/cart/cart.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { SingleInstrumentComponent } from './single_pages/single-instrument/single-instrument.component';
import { SingleAccessoryComponent } from './single_pages/single-accessory/single-accessory.component';
import { SingleEquipmentComponent } from './single_pages/single-equipment/single-equipment.component';
import { SingleSoftwareComponent } from './single_pages/single-software/single-software.component';
import { InsertProductsComponent } from './insert-products/insert-products.component';
import { InsertInstrumentComponent } from './insert-products/insert-instrument/insert-instrument.component';
import { InsertAccessoryComponent } from './insert-products/insert-accessory/insert-accessory.component';
import { InsertEquipmentComponent } from './insert-products/insert-equipment/insert-equipment.component';
import { InsertSoftwareComponent } from './insert-products/insert-software/insert-software.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyInstrumentsComponent } from './my-products/my-instruments/my-instruments.component';
import { MyAccessoriesComponent } from './my-products/my-accessories/my-accessories.component';
import { MyEquipmentComponent } from './my-products/my-equipment/my-equipment.component';
import { MySoftwaresComponent } from './my-products/my-softwares/my-softwares.component';
import { UpdateInstrumentsComponent } from './update-products/update-instruments/update-instruments.component';
import { UpdateAccessoriesComponent } from './update-products/update-accessories/update-accessories.component';
import { UpdateEquipmentComponent } from './update-products/update-equipment/update-equipment.component';
import { UpdateSoftwaresComponent } from './update-products/update-softwares/update-softwares.component';
import { ProfileComponent } from './profile/profile.component';
import { InterceptorsService } from './interceptors.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ProductsComponent,
    InstrumentsComponent,
    AccessoriesComponent,
    AdditionalEquipmentComponent,
    MusicSoftwaresComponent,
    OrdersComponent,
    CartComponent,
    MyOrdersComponent,
    SingleInstrumentComponent,
    SingleAccessoryComponent,
    SingleEquipmentComponent,
    SingleSoftwareComponent,
    InsertProductsComponent,
    InsertInstrumentComponent,
    InsertAccessoryComponent,
    InsertEquipmentComponent,
    InsertSoftwareComponent,
    MyProductsComponent,
    MyInstrumentsComponent,
    MyAccessoriesComponent,
    MyEquipmentComponent,
    MySoftwaresComponent,
    UpdateInstrumentsComponent,
    UpdateAccessoriesComponent,
    UpdateEquipmentComponent,
    UpdateSoftwaresComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
