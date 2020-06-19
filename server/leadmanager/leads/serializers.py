from rest_framework import serializers
from leads.models import Lead

# A serializer that is used for serializing our created python object model into JSON to use in our APIs
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'