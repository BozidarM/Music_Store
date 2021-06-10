import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";
import { SingleInstrumentComponent } from "./single_pages/single-instrument/single-instrument.component";
import { InsertProductsComponent } from "./insert-products/insert-products.component";
import { MyProductsComponent } from "./my-products/my-products.component";
import { UpdateInstrumentsComponent } from "./update-products/update-instruments/update-instruments.component";
import { ProfileComponent } from "./profile/profile.component";
import { SingleAccessoryComponent } from "./single_pages/single-accessory/single-accessory.component";
import { UpdateAccessoriesComponent } from "./update-products/update-accessories/update-accessories.component";
import { SingleEquipmentComponent } from "./single_pages/single-equipment/single-equipment.component";
import { UpdateEquipmentComponent } from "./update-products/update-equipment/update-equipment.component";
import { SingleSoftwareComponent } from "./single_pages/single-software/single-software.component";
import { UpdateSoftwaresComponent } from "./update-products/update-softwares/update-softwares.component";
import { AuthGuard } from "./auth/auth.guard";




const rute: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'insert_products', component: InsertProductsComponent, canActivate: [AuthGuard]},
    {path: 'cart', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'instruments/oneInstrument/:id', component: SingleInstrumentComponent},
    {path: 'instruments/updateInstrument/:id', component: UpdateInstrumentsComponent, canActivate: [AuthGuard]},
    {path: 'accessories/oneAccessory/:id', component: SingleAccessoryComponent},
    {path: 'accessories/updateAccessory/:id', component: UpdateAccessoriesComponent, canActivate: [AuthGuard]},
    {path: 'additionalEquipment/oneEquipment/:id', component: SingleEquipmentComponent},
    {path: 'additionalEquipment/updateEquipment/:id', component: UpdateEquipmentComponent, canActivate: [AuthGuard]},
    {path: 'softwares/oneSoftware/:id', component: SingleSoftwareComponent},
    {path: 'softwares/updateSoftware/:id', component: UpdateSoftwaresComponent, canActivate: [AuthGuard]},
    {path: 'myproducts', component: MyProductsComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rute)
    ],

    exports:[
        RouterModule
    ]
})

export class RoutingModule {}