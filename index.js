const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 4001
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const credentials = "./X509-cert-6375362467439856284.pem"

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://dodevcluster.r8asi.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority',
{
    sslKey: credentials,
    sslCert: credentials 
})
.catch(err => console.error(err))


const Expense = new Schema({
    id: ObjectId,
    name: Schema.Types.String,
    date: Schema.Types.Date,
    amount: Schema.Types.Decimal128
})

const ExpenseModel = mongoose.model('expense', Expense)

app.get('/', (req, res) => {
    ExpenseModel.find({}, (err, docs) => {
        if (err) throw err
        res.json(docs)
    })
})

app.post('/', (req, res) => {
    ExpenseModel.create(req.body, (err, doc) => {
            if (err) throw err
            res.json(doc)
        })
})

app.post('/delete', (req, res) => {
    ExpenseModel.deleteOne(req.body, (err) =>{
    if (err) throw err
    })
    res.json()
})

/* app.post(':id/update', (req, res) => {
    console.log(req.params.id)
    ExpenseModel.updateOne({_id: req.params.id}, req.body, (err) => {
        if (err) throw err
        res.json(doc)
    })
}) */

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})