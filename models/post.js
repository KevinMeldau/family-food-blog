const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: String,
		releaseYear: {
			type: Number,
			default: 2000,
		},
		mpaaRating: String,
		cast: [String],
		nowShowing: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
