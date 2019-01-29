import server from './server'
import database from './db'

import Framework from './mongoose/models/framework'
import frameworkSeeds from './mongoose/seeds/Frameworks.json'

import seed from './seed'

import rest from './rest'
import graphql from './graphql'

//	Connect to the database and start the server inside the Promise
database()
	.then((db) => {
		server.listen()

		//	Add the GraphQL API to our server
		graphql(server.getApp(), '/graphql')

		//	Use REST API on specific route
		server.getApp().use('/', rest(db))

		seed(Framework, frameworkSeeds)
	})
	.catch((reason) => {
		//	Close the server on database error
		console.error(reason)
		process.exit(1)
	})

export default server
