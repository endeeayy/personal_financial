# Generated by Django 3.1.2 on 2020-10-05 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budget', '0003_transaction_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='date',
            field=models.CharField(default='05/10/2020', max_length=10),
            preserve_default=False,
        ),
    ]
