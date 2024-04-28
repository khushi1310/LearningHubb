import mongoose from 'mongoose';


const Flashcard = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		content: { type: String, required: true },
	},
)

const model = mongoose.model('FlashCard', Flashcard)

export default model