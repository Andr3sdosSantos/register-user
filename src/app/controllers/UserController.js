import generateId from '../../utils/generateUniqueId'
import User from '../models/User'

export default { 
  async create(req, res) {
    const { name, email } = req.body;

    const id = generateId()

    const user = await User.create({
      id, name, email
    })

    return res.json( user )
  }
}