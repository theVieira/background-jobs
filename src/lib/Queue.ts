import Queue from 'bull'
import redisConfig from '../config/redis.conf'
import * as jobs from '../jobs/index'

const queues = Object.values(jobs).map((queue) => ({
	// @ts-ignore
	bull: new Queue(queue.key, redisConfig),
	handle: queue.handle,
	name: queue.key,
}))

export default {
	queues,
	add(name: string, data: any) {
		const queue = this.queues.find((queue) => queue.name === name)

		return queue?.bull.add(data)
	},
	process() {
		return this.queues.forEach((queue) => {
			// @ts-ignore
			queue.bull.process(queue.handle)

			queue.bull.on('failed', (job, error) => {
				console.error('Job Failed ', queue.name, job.data)
				console.error(error)
			})
		})
	},
}
