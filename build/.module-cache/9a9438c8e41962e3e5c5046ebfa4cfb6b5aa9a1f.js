var App = React.createClass({displayName: "App",
	render: function() {
		return (
				React.createElement(LikeButton, null)
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
	buttonText: function() {
		return this.state.liked ? "Unlike this trash" : "&hearts; Like this trash";
	},
	render: function() {
		return (
				React.createElement("button", {onClick: this.handleClick}, this.buttonText())
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
