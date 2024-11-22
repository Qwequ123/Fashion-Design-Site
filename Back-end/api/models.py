from django.db import models

# Create your models here.
class Member(models.Model):
    fname = models.CharField(max_length=200)
    lname = models.CharField(max_length=200)
    age = models.IntegerField()
    email = models.EmailField()
    passwrd = models.CharField(max_length=20)
    def __str__(self) -> str:
        return self.fname + " " + self.lname
# class Member(models.Model):
#     fname = models.CharField(max_length = 200)
#     lname = models.CharField(max_length = 200)
#     age = models.IntegerField()
#     email = models.EmailField(max_length=254)
#     passwrd = models.CharField(max_length=254)
#     def __str__(self) -> str:
#         return self.fname + " " + self.lname
