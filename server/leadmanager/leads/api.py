from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


# Lead Viewset (creates automatic CRUD operations for our models without having to explicitly specify them)
# From docs: A viewset that provides default `create()`, `retrieve()`, `update()`,
# `partial_update()`, `destroy()` and `list()` actions.
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()  # A query that grabs all the leads
    permission_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer