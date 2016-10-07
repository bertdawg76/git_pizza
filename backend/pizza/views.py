from rest_framework import viewsets
from pizza.serializers import ToppingSerializer, OrderSerializer, CrustSerializer, SizeSerializer
from pizza.models import Order, Topping, Crust, Size

class OrderViewSet(viewsets.ModelViewSet):

    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ToppingViewSet(viewsets.ModelViewSet):

    queryset = Topping.objects.all()
    serializer_class = ToppingSerializer

class CrustViewSet(viewsets.ModelViewSet):

    queryset = Crust.objects.all()
    serializer_class = CrustSerializer

class SizeViewSet(viewsets.ModelViewSet):

    queryset = Size.objects.all()
    serializer_class = SizeSerializer



