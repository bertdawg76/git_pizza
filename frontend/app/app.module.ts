import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PizzaToppingComponent } from './pizza-toppings/pizza-toppings.component';
import { PizzaSizeComponent } from './pizza-sizes/pizza-sizes.component';
import { AppComponent } from './app.component';
import { ToppingService } from "./services/topping.service";
import { SizeService } from './services/sizes.service';
import {CrustService} from "./services/crust.service";
import {PizzaCrustComponent} from "./pizza-crusts/pizza-crusts.component";
import {PizzaOrderComponent} from "./pizza-order/pizza-order.component";
import {OrderService} from "./services/order.service";


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule


    ],
    declarations: [
        AppComponent,
        HelloWorldComponent,
        PizzaToppingComponent,
        PizzaSizeComponent,
        PizzaCrustComponent,
        PizzaOrderComponent
    ],
    providers: [
        ToppingService,
        SizeService,
        CrustService,
        OrderService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
