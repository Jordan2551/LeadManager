from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
# Register the viewset we made for leads into the router so that the routes for CRUD operations get binded
router.register('api/leads', LeadViewSet, 'leads')

# Return the url patterns generated above
urlpatterns = router.urls