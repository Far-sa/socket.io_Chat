const { StatusCodes: HttpStatus } = require('http-status-codes')

const Controller = require('../controller')
const Conversation = require('../../../models/conversation')

class RoomController extends Controller {
  async addRoom (req, res, next) {
    try {
      const {title,description} = req.body
      const room = await Conversation.create({})
    } catch (err) {
      next(err)
    }
  }

  async getRooms (req, res, next) {
    try {
    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  RoomController: new RoomController()
}
