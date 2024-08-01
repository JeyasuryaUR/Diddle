# Generated by Django 5.0.7 on 2024-08-01 13:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diddle', '0005_lancerproposal_client_project_lancer_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='HireApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pitch', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('lancer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hire_applications', to='diddle.userprofile')),
            ],
        ),
    ]
