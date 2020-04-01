import { Router } from 'express'

import './database'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/users', UserController.create)

export default routes