from django.db import models

# Create your models here.


class Manager(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

class Employee(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=10) # should use an enum field
    national_code = models.CharField(max_length=11)
    personal_code = models.CharField(max_length=15)
    phone_number = models.CharField(max_length=11)
    address = models.CharField(max_length=50)
    married = models.BooleanField()
    age = models.IntegerField()
    wage = models.IntegerField()
