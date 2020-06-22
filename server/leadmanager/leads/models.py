from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # Create a fkey relation with the user table, so a user has many leads
    # Params:
    # db_model: model for relation,
    # related_name: the reverse relationship token so that we can access the leads from the user table (user.leads)
    # on_delete: when deleting a user, we delete all of its corresponding leads
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
