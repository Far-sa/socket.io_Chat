const router = require('express').Router()

const {
  SupportController
} = require('../../http/controllers/support/support.controller')

const namespaceController = require('./namespace.router')
const roomController = require('./room.router')

router.use('/namespace', namespaceController)
router.use('/room', roomController)
router.get('/', SupportController.renderChatRoom)

module.exports = router
