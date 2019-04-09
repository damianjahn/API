const express = require('express')
const router = express.Router()

router.get('./products')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get method from product'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'post method from product'
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id == 'secret'){
        res.status(200).json({
            message: 'Poznales tajne  ID',
           id : id
        })
    } else {
        res.status(200).json({
            message:'nope'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'Your product is changed'
    })

})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message:'Your product is deleted'
    })

})


module.exports = router