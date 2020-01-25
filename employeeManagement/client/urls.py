from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('manager/login', views.manager_login, name='login'),
    path('employee/list', views.employeeList, name='employeeList'),
    path('employee/<int:employee_id>/edit', views.employeeEdit, name='employeeEdit'),
    path('employee/new', views.employeeNew, name='employeeNew'),
    path('employee/delete', views.employeeDelete, name='employeeDelete'),
    path('employee/report', views.report, name='report'),
    path('employee/statistics', views.statistics, name='statistics'),

    path('myget/<str:employee_name>', views.myget, name='myget'),
    path('myupdate/<str:employee_personal_code>/<int:employee_wage_new>', views.myupdate, name='myupdate'),
    path('mydel/<str:type>', views.mydel, name='mydel')

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)