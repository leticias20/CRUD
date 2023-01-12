const express = require('express')
var router = express()
const create = require('../controller/emp')
const view = require('../controller/emp')
const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)
const update = require('../controller/emp')
router.patch('/:id',update.update)
module.exports = router
const remove = require('../controller/emp')
router.delete('/delete/:id',remove.remove)