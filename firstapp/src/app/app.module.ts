import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';
import { MyUpper } from './products/upperCase.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { FilterProduct } from './products/filterProduct.pipe';

@NgModule({

    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],
    // All component & pipes
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpper,
        DiscountPipe,
        FilterProduct
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // Your services will declare here
    providers: []
})


export class AppModule {

}

