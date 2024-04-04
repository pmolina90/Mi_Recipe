from django.db import models

# Create your models here.
class Recipes(models.Model):
    
    title = models.CharField("Title", max_length=250)
    ingredients = models.TextField("Ingredients")
    directions = models.TextField("Directions",)
    createdAt = models.DateField("Created At", auto_now_add=True)
    
    def __str__(self):
        return self.title