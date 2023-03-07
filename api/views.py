from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Blog
from .serializers import BlogSerializer
'''
This code defines four functions that use the Django Rest Framework (DRF) library to create an API to perform basic CRUD operations (Create, Read, Update, Delete) in the Blog model.

'''
@api_view(['GET']) # This function is decorated with @api_view(['GET']), indicating that it responds to GET requests. It gets all the Blog records in the database, serializes them with the BlogSerializer serializer and returns an HTTP response with the serialized data in JSON format.
def getBlog(request):
    blog = Blog.objects.all()
    serializer = BlogSerializer(blog, many=True)
    return Response(serializer.data)


@api_view(['POST']) # This function is decorated with @api_view(['POST']), indicating that it responds to POST requests. It receives the request data in request.data, creates a new record in the database using the received data, serializes it with the BlogSerializer serializer and returns an HTTP response with the serialized data in JSON format.
def postBlog(request):
    data = request.data
    blog = Blog.object.create(
        body= data['body']
    )
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)


@api_view(['PUT']) # This function is decorated with @api_view(['PUT']), indicating that it responds to PUT requests. It receives the request data in request.data and the identifier of the record to update in pk. It looks up the corresponding record in the database, updates it with the received data, serializes it with the BlogSerializer serializer and returns an HTTP response with the serialized data in JSON format.
def putBlog(request, pk):
    data = request.data
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(instance=blog, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)


@api_view(['DELETE']) # This function is decorated with @api_view(['DELETE']), indicating that it responds to DELETE requests. It receives the identifier of the record to delete in pk, looks for the corresponding record in the database and deletes it. It returns an HTTP response indicating that the record was deleted.
def deleteBlog(request,pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response('Blog Deleted')

