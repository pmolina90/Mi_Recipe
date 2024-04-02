from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Recipes  # Adjusted model import
from .serializers import RecipesSerializer  # Adjusted serializer import

@api_view(['GET', 'POST'])
def recipes_list(request):
    if request.method == 'GET':
        data = Recipes.objects.all()  # Corrected attribute name
        serializer = RecipesSerializer(data, context={'request': request}, many=True)  # Adjusted serializer name
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RecipesSerializer(data=request.data)  # Adjusted serializer name
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def recipes_detail(request, pk):
    print("Recipe ID:", pk)
    try:
        recipe = Recipes.objects.get(pk=pk)  # Corrected attribute name
    except Recipes.DoesNotExist:  # Corrected exception name
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RecipesSerializer(recipe)  # Adjusted serializer name
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RecipesSerializer(recipe, data=request.data, context={'request': request})  # Adjusted serializer name
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        recipe.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
