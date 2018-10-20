import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';

@NgModule({

    // All module will declare here
    imports: [
        BrowserModule
    ],
    // All component & pipes
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent
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

