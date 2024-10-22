import Mail from '../lib/Mail'

export default {
	key: 'Registration Mail',
	async handle(user: { name: string; email: string }) {
		await Mail.sendMail({
			from: 'Background Jobs <background@jobs.com.br>',
			to: `${user.name} <${user.email}>`,
			subject: 'Background Jobs',
			html: '<h1>Welcome to Background Jobs</h1>',
		})
	},
}
