"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var hello_world_component_1 = require('./hello-world/hello-world.component');
var pizza_toppings_component_1 = require('./pizza-toppings/pizza-toppings.component');
var pizza_sizes_component_1 = require('./pizza-sizes/pizza-sizes.component');
var app_component_1 = require('./app.component');
var topping_service_1 = require("./services/topping.service");
var sizes_service_1 = require('./services/sizes.service');
var crust_service_1 = require("./services/crust.service");
var pizza_crusts_component_1 = require("./pizza-crusts/pizza-crusts.component");
var pizza_order_component_1 = require("./pizza-order/pizza-order.component");
var order_service_1 = require("./services/order.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                hello_world_component_1.HelloWorldComponent,
                pizza_toppings_component_1.PizzaToppingComponent,
                pizza_sizes_component_1.PizzaSizeComponent,
                pizza_crusts_component_1.PizzaCrustComponent,
                pizza_order_component_1.PizzaOrderComponent
            ],
            providers: [
                topping_service_1.ToppingService,
                sizes_service_1.SizeService,
                crust_service_1.CrustService,
                order_service_1.OrderService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map