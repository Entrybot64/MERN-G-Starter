import express from 'express'
import cors from 'cors'

import graphql from './graphql'

import dotenv from 'dotenv'

dotenv.config()

const app = express()

let setPort = (port = 5000) => {
	app.set('port', parseInt(port, 10))
}

let listen = () => {
	const port = app.get('port') || process.env.PORT || 5000
	app.listen(port, () => {
		console.log(
			`Listening on http://${process.env.DOMAIN}:${process.env.PORT}`
		)
	})
}

app.use(
	cors({
		origin: process.env.CORS_DOMAIN,
		optionsSuccessStatus: 200
	})
)

app.get('/status', (req, res) => {
	res.send({ status: 'ok' })
})

graphql(app)

export default {
	getApp: () => app,
	setPort,
	listen
}
