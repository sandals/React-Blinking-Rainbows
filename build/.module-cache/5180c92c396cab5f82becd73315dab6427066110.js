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
		var new_like = liked ? this.state.likes + 1 : this.state.likes - 1
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
	likedTitle: function() {
		if (this.state.likes > 0) {
			return React.createElement("h1", null, React.createElement(Blink, null, this.props.title));
		}
		else {
			return React.createElement("h1", null, this.props.title)
		}
	},
	likedBodyText: function() {
		if (this.state.likes > 0) {
			return React.createElement("p", {className: "rainbow"}, this.props.body)
		}
		else {
			return React.createElement("p", null, this.props.body);
		}
	},
	render: function() {
		return (
			React.createElement("div", {className: this.articleClassName()}, 
				this.likedTitle(), 
				this.likedBodyText(), 
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

var Blink = React.createClass({displayName: "Blink",
	getInitialState: function() {
		setInterval(this.toggleVisibility, 1000);
		return { visible: true };
	},
	render: function() {
		return (React.createElement("span", null, this.props.children));
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
