const router = require('express').Router()

const {
  NameSpaceController
} = require('../../http/controllers/support/nameSpace.controller')

router.post('/add', NameSpaceController.addNameSpace)
router.get('/list', NameSpaceController.getNameSpaces)

module.exports = router
