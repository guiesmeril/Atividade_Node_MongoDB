const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Tarefas = require ('./src/models/tarefasModel')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todoListMongoDb',{
	useNewUrlParser: true,
	 useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())



const routes = require('./src/routes/tarefasRoutes')

routes(app)

app.route('/').get((req, res) => {
	res.send('Acessou a API do TodoList')
})


const port = process.env.PORT || 3001

app.listen(port)

console.log('Aplicação iniciada na porta',port)