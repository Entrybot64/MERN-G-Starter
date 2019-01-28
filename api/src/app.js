import server from './server'
import database from './db'

import rest from './rest'

database()
	.then((db) => {
		server.listen()

		server.getApp().use('/rest', rest(db))
	})
	.catch((reason) => {
		console.error(reason)
		process.exit(1)
	})

export default server
