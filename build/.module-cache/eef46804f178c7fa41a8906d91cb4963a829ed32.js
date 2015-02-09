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
	render: function() {
		return (
				React.createElement("button", {onClick: this.handleClick}, "♥ Like This Crap")
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
