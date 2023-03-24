from django.db import models
from users.models import User

class Blog():
    body = models.CharField(("Write something here"), max_length=50)
    user = models.ForeignKey("app.Model", verbose_name=(""), on_delete=models.CASCADE)
    date = models.DateTimeField( auto_now=False, auto_now_add=False)

class Comment():
    blog = models.ForeignKey("app.Model", verbose_name=(""), on_delete=models.CASCADE)
    user = models.ForeignKey("app.Model", verbose_name=(""), on_delete=models.CASCADE)
    text = models.CharField((""), max_length=50)
    date = models.DateTimeField((""), auto_now=False, auto_now_add=False)