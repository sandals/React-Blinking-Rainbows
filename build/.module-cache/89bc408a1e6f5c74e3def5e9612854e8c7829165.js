var App = React.createClass({displayName: "App",
	render: function() {
		return (
				React.createElement(Article, {title: "Hello World", body: "Wow mane like this is so kewl and things."}, 
					React.createElement(LikeButton, null)
				)
		);
	}
});

var Article = React.createClass({displayName: "Article",
	getInitialState: function() {
		return {
			likes: 0
		};
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, this.props.title), 
				React.createElement("p", null, this.props.body), 
				this.state.likes, " likes. ", this.props.children
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
	},
	buttonClass: function() {
		return "button" + (this.state.liked? " liked" : "");
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
