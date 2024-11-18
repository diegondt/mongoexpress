Para instalar mongodb:

```bash
```

Para controlar el sevidor:

```bash
sudo systemctl status mongod.service  # comprueba el estado del servidor
sudo systemctl start mongod.service   # iniciar el servidor
sudo systemctl stop mongod.service    # parar el servidor
sudo systemctl restart mongod.service # reiniciar el servidor
sudo systemctl enable mongod.service  # iniciar el servidor cuando arranquemos el equipo
```

Cuando tengais todo instalado y el servidor activo, puedes entrar con `mongosh`

Recrea la siguiente base de datos:

```bash
test> use teztz
switched to db teztz
teztz> db.createCollection("usuarios")
{ ok: 1 }
teztz> db.usuarios.insertOne({nombre:"admin", password:"1234"})
{
  acknowledged: true,
  insertedId: ObjectId('673b2527c4d192f3d8fe6911')
}
teztz> db.usuarios.insertOne({nombre:"user0", password:"1234"})
{
  acknowledged: true,
  insertedId: ObjectId('673b252fc4d192f3d8fe6912')
}
teztz> db.usuarios.insertOne({nombre:"user1", password:"1234"})
{
  acknowledged: true,
  insertedId: ObjectId('673b2534c4d192f3d8fe6913')
}
teztz> db.usuarios.insertOne({nombre:"user2", password:"1234"})
{
  acknowledged: true,
  insertedId: ObjectId('673b2538c4d192f3d8fe6914')
}
teztz> db.usuarios.find({nombre: "user0"})
[
  {
    _id: ObjectId('673b252fc4d192f3d8fe6912'),
    nombre: 'user0',
    password: '1234'
  }
]
teztz> 
```

Instala las dependencias del proyecto con `npm install` y arranca el servidor con `nodemon server.js` o `node server.js`.
