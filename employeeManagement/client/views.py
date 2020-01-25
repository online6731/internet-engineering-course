from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import Employee
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login

# Create your views here.

@login_required
def index(request):
    employees = Employee.objects.all()
    return render(request, 'employeeList.html', { 'employees': employees })

def manager_login(request):
    if request.method == 'GET':
        return render(request, 'login.html', {})
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('employeeList')
        else:
            return redirect('login')

@login_required
def employeeList(request):
    employees = Employee.objects.all()
    return render(request, 'employeeList.html', { 'employees': employees })

@login_required
def employeeDelete(request):
    if request.method == 'GET':
        return render(request, 'employeeDelete.html', {})
    elif request.method == 'POST':
        try:
            Employee.objects.get(personal_code=request.POST.get('personal_code')).delete()
        except:
            pass
        return redirect('employeeList')

@login_required
def employeeNew(request):
    if request.method == 'GET':
        return render(request, 'employeeNew.html', {})
    elif request.method == 'POST':
        try:
            employee = Employee(first_name=request.POST.get('first_name'),
                                last_name=request.POST.get('last_name'),
                                national_code=request.POST.get('national_code'),
                                personal_code=request.POST.get('personal_code'),
                                phone_number=request.POST.get('phone_number'),
                                address=request.POST.get('address'),
                                married=request.POST.get('married')=='on',
                                age=request.POST.get('age'),
                                wage=request.POST.get('wage'),
                                gender=request.POST.get('gender'))
            employee.save()
        except:
            pass
        return redirect('employeeList')

@login_required
def employeeEdit(request, employee_id):
    if request.method == 'GET':
        employee = Employee.objects.get(id=employee_id)
        return render(request, 'employeeEdit.html', { 'employee': employee })
    elif request.method == 'POST':
        print(request.POST.get('id'), request.POST.get('married'), request.POST.get('married') == 'on')
        employee = Employee.objects.get(id=request.POST.get('id'))
        employee.first_name = request.POST.get('first_name')
        employee.last_name = request.POST.get('last_name')
        employee.national_code = request.POST.get('national_code')
        employee.personal_code = request.POST.get('personal_code')
        employee.phone_number = request.POST.get('phone_number')
        employee.address = request.POST.get('address')
        employee.married = request.POST.get('married') == 'on'
        employee.age = request.POST.get('age')
        employee.wage = request.POST.get('wage')
        employee.gender = request.POST.get('gender')
        employee.save()

        return redirect('employeeList')

@login_required
def report(request):
    if request.method == 'GET':
        employees = Employee.objects.all()
        return render(request, 'report.html', { 'employees': employees })
    elif request.method == 'POST':
        employees = Employee.objects.filter(first_name=request.POST.get('first_name'))

        return render(request, 'report.html', { 'employees': employees })

@login_required
def statistics(request):
    if request.method == 'GET':
        statistics = {
            'married_count': Employee.objects.filter(married=True).count(),
            'bachelor_count': Employee.objects.filter(married=False).count(),
            'high_wage_count': Employee.objects.filter(wage__gt=10000000).count(),
            'most_wage_employee': Employee.objects.order_by('-wage')[0],
            'least_wage_employee': Employee.objects.order_by('wage')[0],
            'sum_of_wages': sum(e.wage for e in Employee.objects.all()),
            'enheraf_az_meyar': 1
        }
        return render(request, 'statistics.html', { 'statistics': statistics })
    elif request.method == 'POST':

        return redirect('employeeList')

@login_required
def myget(request, employee_name):
    if request.method == 'GET':
        employees = Employee.objects.filter(first_name=employee_name)
        return employees


@login_required
def myupdate(request, employee_wage_old, employee_wage_new):
    if request.method == 'POST':
        employee = Employee.objects.get(personal_code=employee_personal_code)
        employee.wage = employee_wage_new
        employee.save()
        return employee

@login_required
def mydel(request, gender):
    if request.method == 'DELETE':
        employee = Employee.objects.get(gender=gender)
        employee.delete()
        return 'employee deleted successfully'
