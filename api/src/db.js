import mongoose from 'mongoose'

const connect = () =>
	mongoose.connect(
		`${process.env.DB_URL}/${process.env.DB_NAME}`,
		{ useNewUrlParser: true }
	)

export default connect()
