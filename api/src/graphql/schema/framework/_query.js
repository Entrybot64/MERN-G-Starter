import Framework from '../../../mongoose/models/Framework'

const Query = `
 extend type Query {
   frameworks: [Framework]
 }
`

export const queryTypes = () => [Query]

export const queryResolvers = {
	Query: {
		frameworks: () => Framework.find()
	}
}
