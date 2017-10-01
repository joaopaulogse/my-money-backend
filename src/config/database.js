const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O Atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor do que limite mínimo  de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é menor do que limite mínimo  de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."