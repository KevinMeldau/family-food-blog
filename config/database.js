const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin:abcd1234@kevinmeldauprivate.1svke.mongodb.net/blog?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	}
);

const db = mongoose.connection;

db.on("connected", function () {
	console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
