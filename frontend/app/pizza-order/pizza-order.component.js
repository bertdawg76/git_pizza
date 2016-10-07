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
var order_service_1 = require('../services/order.service');
var PizzaOrderComponent = (function () {
    function PizzaOrderComponent(orderService) {
        this.orderService = orderService;
        this.model = 'Observable';
    }
    PizzaOrderComponent.prototype.addOrder = function (order) {
        var _this = this;
        console.log(order);
        if (!order) {
            return;
        }
        this.orderService.addOrder(order)
            .subscribe(function (order) { return _this.order.push(order); }, function (error) { return _this.errorMessage = error; });
        console.log('you submitted: ', order);
    };
    PizzaOrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pizza-order',
            templateUrl: './pizza-order.component.html',
            styleUrls: ['pizza-order.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService])
    ], PizzaOrderComponent);
    return PizzaOrderComponent;
})();
exports.PizzaOrderComponent = PizzaOrderComponent;
//# sourceMappingURL=pizza-order.component.js.map