const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const TarefasSchema = new Schema({
	descricao: {
		type: String,
		required: 'Favor informar a Descrição'
	},
	status: {
		type: String,
		required: 'Favor informar o Status'
	},
	created_at: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Tarefas', TarefasSchema)