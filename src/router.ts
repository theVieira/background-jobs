import { Request, Response, Router } from 'express'
import UserController from './controller/UserController'

const router = Router()

router.post('/create', UserController.store)

export { router }
