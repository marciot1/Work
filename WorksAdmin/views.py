from django.shortcuts import render

def registro_tarefas(request):
    return render(request, 'registro.html')
