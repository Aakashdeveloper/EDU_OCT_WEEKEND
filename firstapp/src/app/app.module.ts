import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/Router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/product.module';

@NgModule({

    // All module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ]),
        ProductModule
    ],
    // All component & pipes
    declarations: [
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ]
})


export class AppModule {

}

