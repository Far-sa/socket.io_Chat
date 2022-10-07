const router = require('express').Router()

const {
  SupportController
} = require('../../http/controllers/support/support.controller')

router.get('/', SupportController.renderChatRoom)

module.exports = router
