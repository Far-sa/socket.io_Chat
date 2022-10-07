const router = require('express').Router()

const {
  RoomController
} = require('../../http/controllers/support/room.controller')

router.post('/add', RoomController.addRoom)
router.get('/list', RoomController.getRooms)

module.exports = router
