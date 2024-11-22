from rest_framework import routers, serializers, viewsets
# Serializers define the API representation.
from .models import Member

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ['fname', 'lname', 'email', 'age']
