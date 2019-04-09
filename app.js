const express = require('express')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const productRouts = require('./api/roots/products')
const orderRouts = require('./api/roots/orders')

mongoose.connect('mongodb+srv://Username:'+ process.env.MONGO_ATLAS_PW +'@cluster-rwphn.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/products', productRouts)
app.use('/orders', orderRouts)


app.use((req, res, next) => {
    const error = new Error('Page not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})


module.exports = app