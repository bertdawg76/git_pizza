from django.contrib import admin

from .models import Topping, Crust, Size, Order

admin.site.register(Topping)
admin.site.register(Crust)
admin.site.register(Size)
admin.site.register(Order)
