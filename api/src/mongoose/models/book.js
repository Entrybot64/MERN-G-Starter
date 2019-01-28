import mongoose from 'mongoose'
import book from '../schema/book'

export default mongoose.model('Book', book)
