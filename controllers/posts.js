const Post = require("../models/post");

function newPost(req, res) {
	res.render("posts/new");
}

function create(req, res) {
	// we need to sanitize our data
	for (key in req.body) {
		if (req.body[key] === "") delete req.body[key];
	}
	// convert the checkbox input into a boolean
	req.body.nowShowing = !!req.body.nowShowing; // convert to a boolean

	// turn the string of cast names into an array of cast names
	if (req.body.cast) {
		req.body.cast = req.body.cast.replace(/\s*,\s*/g, ",");
		req.body.cast = req.body.cast.split(",");
	}

	Post.create(req.body, function (err, post) {
		if (err) return res.render("posts/new");
		res.redirect("/posts");
	});
}

function index(req, res) {
	Post.find({}, function (err, posts) {
		console.log(posts);
		res.render("posts/index", { posts });
	});
}

module.exports = {
	new: newPost,
	create,
	index,
};
