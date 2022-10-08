const { StatusCodes: HttpStatus } = require('http-status-codes')

const Controller = require('../controller')
const Conversation = require('../../../models/conversation')

class RoomController extends Controller {
  async addRoom (req, res, next) {
    try {
      const {
        title,
        description,
        filename,
        fileUploadPath,
        namespace
      } = req.body

      await this.findRoomWithName(title)
      
      const image = path.join(fileUploadPath, filename).replace(/\\/g, '/')
      const room = { title, description, image }
      await Conversation.updateOne(
        { endpoint: namespace },
        {
          $push: { rooms: room }
        }
      )
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: 'Room has been Created'
        }
      })
    } catch (err) {
      next(err)
    }
  }

  async getRooms (req, res, next) {
    try {
      const conversation = await Conversation.find({}, { rooms: 1 })
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          rooms: conversation.rooms
        }
      })
    } catch (err) {
      next(err)
    }
  }
  async findRoomWithTitle (title) {
    const conversation = await Conversation.findOne({ 'room.title': title })
    if (conversation)
      throw createHttpError.BadRequest('Room name is already Taken')
  }
}

module.exports = {
  RoomController: new RoomController()
}
