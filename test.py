import requests

def test_get_usuarios():
    response = requests.get('http://localhost:3000/usuarios')
    assert response.status_code == 200

def test_post_usuarios(nombre, password):
    response = requests.post('http://localhost:3000/usuarios', json={'nombre': nombre, 'password': password})
    assert response.status_code == 201

def test_get_usuario(id):
    response = requests.get(f'http://localhost:3000/usuarios/{id}')
    assert response.status_code == 200

def test_put_usuario(nombre_actual, nombre_nuevo, contraseña_nuevo):
    response = requests.put(f'http://localhost:3000/usuarios/{nombre_actual}', json={'nombre': nombre_nuevo, 'password': contraseña_nuevo})
    assert response.status_code == 200