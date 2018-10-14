import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({

    // All module will declare here
    imports: [
        BrowserModule
    ],
    // All component & pipes
    declarations: [
        AppComponent
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

