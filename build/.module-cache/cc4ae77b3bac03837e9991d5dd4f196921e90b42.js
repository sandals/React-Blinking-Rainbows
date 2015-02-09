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
	isLiked: function() {
		if (this.state.liked) {
			this.prop.button_text = "Unlike this shit";
		}
	},
	render: function() {
		return (
				React.createElement("button", {onClick: this.handleClick}, "♥ Like This Crap")
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
