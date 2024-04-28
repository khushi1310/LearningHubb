import mongoose from 'mongoose';


const User = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		flashcard: [{name: String, content: "String"}]
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

export default model