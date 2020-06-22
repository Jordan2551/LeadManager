from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


# Lead Viewset (creates automatic CRUD operations for our models without having to explicitly specify them)
# From docs: A viewset that provides default `create()`, `retrieve()`, `update()`,
# `partial_update()`, `destroy()` and `list()` actions.
class LeadViewSet(viewsets.ModelViewSet):
    # Only allow authenticated users to grab leads
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = LeadSerializer

    # override the get_queryset function for ModelViewSet and gran that fkey we made from leads -> user
    # we return that user's leads by calling the related_name which we called 'leads'
    def get_queryset(self):
        return self.request.user.leads.all()

    # We override this function to add the data for the 'owner' field inside of leads
    # This MUST be done on server side for obvious reasons
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
