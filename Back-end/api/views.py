from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from .forms import Memberform
from .serializer import UserSerializer  # Fix import statement here
from rest_framework import viewsets
from django.contrib import messages
from .permissions import IsAdminUser
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    
    
# Create your views here.
def home(request):
    user = Member.objects.all()  # Add parentheses to call the method
    return render(request, "home.html", {"user": user})

from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import Memberform
from .models import Member

def join(request):
    if request.method == "POST":
        form = Memberform(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            # Check if a user with the same email exists
            if Member.objects.filter(email=email).exists():
                messages.error(request, "User with this email already exists.")
                return render(request, 'join.html', {'form': form})
            else:
                form.save()
                messages.success(request, "You have successfully created an account!")
                return redirect("home")
        else:
            # Display form errors directly in the template
            return render(request, 'join.html', {'form': form})
    else:
        form = Memberform()
    return render(request, "join.html", {'form': form})



