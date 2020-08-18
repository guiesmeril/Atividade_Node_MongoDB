
const mongoose = require('mongoose')
const Tarefas = mongoose.model('Tarefas')

exports.listAll = (req, res) => {
			Tarefas.find({}, (error, tarefas) => {
				if (error) {
					res.send(error)
				}
				let response = {
				message: 'Tarefa listada com sucesso!',
				data: tarefas
			}
				res.send(response)
			})	
		}

		exports.createOne = (req, res) => {
			const { descricao, status} = req.body
			let novaTarefa = new Tarefas({ descricao, status})
			novaTarefa.save((error, tarefas) => {
				if(error) {
					res.send(error)
				}
							let response = {
				message: 'Tarefa Cadastrado com sucesso!',
				data: tarefas
			}
			res.status(201).json(response)
			})

		}

		exports.showOne = (req,res) => {
			Tarefas.findById(req.params.id, (error, tarefas) =>{
			if (error) {
				res.send(error)
			}
			let response = {
			message: 'Tarefa encontrada com sucesso',
			data: tarefas
			}
			res.status(201).json(response)
			})
		}

		exports.updateTarefas = (req, res) => {
			Tarefas.findOneAndUpdate({ _id: req.params.id },req.body, {new: true},(error, tarefas) => {
				if(error) {
					res.send(error)
				}
				let response = {
					message: 'Tarefa atualizada com sucesso',
					data: tarefas
				}
				res.send(tarefas)
			})	
		}

		exports.deleteTarefas = (req, res) => {
			Tarefas.remove({ _id: req.params.id}, (error, tarefas) => {
				if (error) {
					res.send(error)
				}
				let response = {
					message: 'Tarefa deletada com sucesso',
					data: tarefas
				}
				res.send(response)
			})
			
				}
