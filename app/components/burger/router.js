const router = require('express').Router()
const {readBurger, createBurger, updateBurger, deleteBurger} = require('./controller')
const {requestHandler} = require('../../utils/request')

router.post('/', requestHandler(createBurger))
router.get('/', requestHandler(readBurger))
router.get('/:_id', requestHandler(readBurger))
router.put('/:_id', requestHandler(updateBurger))
router.delete('/:_id', requestHandler(deleteBurger))

module.exports = router