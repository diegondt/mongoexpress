require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
//mongoose.connect(`mongodb://${USER}:${PASSWORD}@0.0.0.0:27017/teztz`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://localhost:27017/teztz', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a la base de datos establecida')
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos', err)
  })

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  password: String
})

const Usuario = mongoose.model('usuarios', usuarioSchema)

app.get("/", (req, res) => {
  res.send("Hola mundo")
})

app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find()
  res.json(usuarios)
});

app.get("/usuarios/:nombre", async (req, res) => {
  const { nombre } = req.params
  const usuario = await Usuario.findOne({ nombre })
  res.json(usuario)
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
