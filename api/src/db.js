import mongoose from 'mongoose'

export default () =>
	mongoose.connect(
		`${process.env.DB_URL}/${process.env.DB_NAME}`,
		{ useNewUrlParser: true }
	)
