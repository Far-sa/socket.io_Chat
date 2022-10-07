const { StatusCodes: HttpStatus } = require('http-status-codes')

const Controller = require('../controller')
const Conversation = require('../../../models/conversation')

class NameSpaceController extends Controller {
  async addNameSpace (req, res, next) {
    try {
      const { title, endpoint } = req.body
      const conversation = await Conversation.create({ title, endpoint })
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: 'Data added successfully'
        }
      })
    } catch (err) {
      next(err)
    }
  }

  async getNameSpaces (req, res, next) {
    try {
      const namespaces = await Conversation.find({}, { rooms: 0 })
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          namespaces
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  NameSpaceController: new NameSpaceController()
}
