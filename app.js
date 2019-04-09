const express = require('express')
const app = express();
const morgan = require('morgan')

const productRouts = require('./api/roots/products')
const orderRouts = require('./api/roots/orders')

app.use(morgan('dev'))
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