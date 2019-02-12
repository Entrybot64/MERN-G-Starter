import mongoose from 'mongoose'

let framework = mongoose.Schema({ name: String, description: String })

/**
 *
 * @param {{ name: String, description: String}} obj
 */
export function verifyFramework(obj) {
	if ('name' in obj || obj.name === typeof undefined || obj.name === '') {
		return false
	}

	if ('description' in obj || obj.description === typeof undefined || obj.description === '') {
		return false
	}

	return true
}

export default mongoose.model('Framework', framework)
