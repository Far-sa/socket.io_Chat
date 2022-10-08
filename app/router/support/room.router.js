const router = require('express').Router()

const {
  RoomController
} = require('../../http/controllers/support/room.controller')
const { uploadFile } = require('../../utils/multer')

router.post('/add', uploadFile.single('image'), RoomController.addRoom)
router.get('/list', RoomController.getRooms)

module.exports = router
