from django.contrib import admin
from django.urls import path, include

# Represents a compiled list of url patterns for the api.
urlpatterns = [
    path('', include('leads.urls')),
    # We grab the urls from the leads app's urls file
]
