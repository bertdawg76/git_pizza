from __future__ import unicode_literals
import datetime
from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

class Topping(models.Model):
    topping_name = models.CharField(max_length=100)
    topping_price = models.DecimalField(max_digits=4, decimal_places=2)
    def __str__(self):
        return self.topping_name


class Crust(models.Model):
    crust_type = models.CharField(max_length=100)
    crust_price = models.DecimalField(max_digits=4, decimal_places=2)
    def __str__(self):
        return self.crust_type


class Size(models.Model):
    size_type = models.CharField(max_length=100)
    size_price = models.DecimalField(max_digits=4, decimal_places=2)
    def __str__(self):
        return self.size_type


class Order(models.Model):
    order_total = models.DecimalField(max_digits=6, decimal_places=2, default=0.0)
    order_time = models.DateTimeField(auto_now_add=True)
    toppings = models.ManyToManyField(Topping, blank=True)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, null=True)
    crust = models.ForeignKey(Crust, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.order_description