from django.db import models

# Create your models here.
class Airport(models.Model):
    name = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    iata_code = models.CharField(max_length=5)
    icao_code = models.CharField(max_length=5)

    def __str__(self):
        return self.name