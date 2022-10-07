const { StatusCodes: HttpStatus } = require('http-status-codes')

const Controller = require('../controller')
const Conversation = require('../../../models/conversation')

class MessageController extends Controller {}

module.exports = {
  MessageController: new MessageController()
}
