# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-06 00:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0002_auto_20161005_2259'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='crust',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pizza.Crust'),
        ),
        migrations.AddField(
            model_name='order',
            name='size',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pizza.Size'),
        ),
        migrations.AddField(
            model_name='order',
            name='toppings',
            field=models.ManyToManyField(to='pizza.Topping'),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
