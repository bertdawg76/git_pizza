from .models import Size, Crust, Topping, Order
from rest_framework import serializers

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size


class CrustSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crust


class ToppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topping

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order

