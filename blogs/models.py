from django.db import models
from users.models import User

class Blog():
    body = models.CharField(("Write something here"), max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    date = models.DateTimeField(auto_now_add=True)

class Comment():
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    text = models.CharField((""), max_length=150)
    date = models.DateTimeField(auto_now_add=True)