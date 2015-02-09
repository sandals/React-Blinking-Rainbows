var App = React.createClass({displayName: "App",
	render: function() {
		return (
				React.createElement(Article, {title: "Hello World", body: "Wow mane like this is so kewl and things."})
		);
	}
});

var Article = React.createClass({displayName: "Article",
	getInitialState: function() {
		return {
			likes: 0
		};
	},
	updateLikes: function(liked) {
		var new_like = liked ? this.state.likes + 1 : 0
		this.setState({
			likes: new_like
		});
	},
	likesAmount: function() {
		return this.state.likes == 1 ? "like" : "likes";
	},
	articleClassName: function() {
		return "article" + (this.state.likes > 0 ? " article-liked" : "");
	},
	specialLikeText: function() {
		if (this.state.likes > 0) {
			return (
					React.createElement("span", {className: "party-text"}, "YOU LIKED THIS")
			);
		}
	},
	render: function() {
		return (
			React.createElement("div", {className: this.articleClassName()}, 
				React.createElement("h1", null, this.props.title), 
				React.createElement("p", null, this.props.body), 
				React.createElement(LikeButton, {onClick: this.updateLikes}), 
				React.createElement("span", {className: "likes-amount"}, this.state.likes, " ", this.likesAmount())
			)
		);
	}
});

var LikeButton = React.createClass({displayName: "LikeButton",
	getInitialState: function() {
		return {
			liked: false
		};
	},
	handleClick: function(event) {
		this.setState({
			liked: !this.state.liked
		});
		this.props.onClick(!this.state.liked);
	},
	buttonClass: function() {
		return "button" + (this.state.liked? " button-liked" : "");
	},
	buttonText: function() {
		return this.state.liked ? "Unlike": "Like";
	},
	render: function() {
		return (
				React.createElement("button", {className: this.buttonClass(), onClick: this.handleClick}, this.buttonText())
				);
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
