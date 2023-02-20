from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import Blog
from .serializers import BlogSerializer

@api_view(['GET'])
def getBlogs(request):
    pass

