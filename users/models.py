from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManage(BaseUserManager):
    def create_user(self, email, user_name, first_name, password, **other_fields ):
        if not email:
            raise ValueError(_('You must provide an email'))
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, user_name, first_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        
        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True')
        if other_fields.get('is_superuser') is not True:
                raise ValueError('Superuser must be assigned to is_superuser=True')
        return self.create_user(email, user_name, first_name, password, **other_fields)
    
class User(AbstractBaseUser, PermissionError):
    email = models.EmailField()
    user_name = models.CharField
    first_name = models.CharField
    start_date = models.DateTimeField
    bio = models.TextField
    image = models.ImageField
    is_staff = models.BooleanField
    is_active = models.BooleanField
    objects =  CustomAccountManage()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name']