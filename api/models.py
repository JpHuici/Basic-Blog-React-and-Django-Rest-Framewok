from django.db import models

class Blog(models.Model): # Blog inherits from the models.Model class.
    title = models.CharField(max_length=25)
    body = models.CharField(max_length=250)
