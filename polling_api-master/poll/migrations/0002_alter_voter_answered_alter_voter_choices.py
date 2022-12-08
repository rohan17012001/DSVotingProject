# Generated by Django 4.1.2 on 2022-12-05 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('poll', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='voter',
            name='answered',
            field=models.ManyToManyField(blank=True, related_name='answered_by', to='poll.poll'),
        ),
        migrations.AlterField(
            model_name='voter',
            name='choices',
            field=models.ManyToManyField(blank=True, related_name='voters', to='poll.choice'),
        ),
    ]
