import Sequelize from 'sequelize'

import dbConfig from '../config/database'
import User from '../app/models/User'

const connection = new Sequelize(dbConfig)

User.init(connection)

export default connection
