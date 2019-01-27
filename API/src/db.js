import mongoose from 'mongoose'

export default () =>
	new Promise((resolve, reject) => {
		mongoose
			.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
			.then((db) => {
				resolve(db)
			})
			.catch((reason) => {
				reject(reason)
			})
	})
