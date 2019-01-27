import express from 'express'
import cors from 'cors'

import graphql from './graphql'

import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config()

const app = express()

let setPort = (port = 5000) => {
	app.set('port', parseInt(port, 10))
}

let listen = () => {
	const port = app.get('port') || process.env.PORT || 5000
	app.listen(port, () => {
		console.log(
			`${chalk.green('Server')} => Listening on http://${
				process.env.DOMAIN
			}:${process.env.PORT}`
		)
	})
}

app.use(
	cors({
		origin: process.env.DOMAIN,
		optionsSuccessStatus: 200
	})
)

app.get('/api/status', (req, res) => {
	res.send({ status: 'ok' })
})

graphql(app)

export default {
	getApp: () => app,
	setPort,
	listen
}
