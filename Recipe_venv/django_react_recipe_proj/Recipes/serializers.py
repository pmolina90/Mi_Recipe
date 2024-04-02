'''
Serializers for Recipes app. 
'''

from rest_framework import serializers
from .models import Recipes

class RecipesSerializer(serializers.ModelSerializer):
    '''
    Serializers for Recipes model. 
    
    SErializers Recipes model fields: title, ingredients, directions, and createdAt
    '''
    class Meta:
        model = Recipes
        fields = ('title', 'ingredients', 'directions', "createdAt")