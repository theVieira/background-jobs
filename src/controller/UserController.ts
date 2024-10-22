import { Request, Response } from 'express'
import mailQueue from '../lib/Queue'

export default {
	async store(req: Request, res: Response): Promise<any> {
		const { name, email, password } = req.body

		const user = { name, email, password }

		await mailQueue.add('Registration Mail', user)

		return res.status(201).json(user)
	},
}
