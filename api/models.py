from django.db import models

class Blog(models.Model): # Blog inherits from the models.Model class.
    body = models.CharField(max_length=250)
