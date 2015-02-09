var App = React.createClass({displayName: "App",
	render: function() {
		return (
				React.createElement(LikeButton, null)
		);
	}
});

var LikeButton = React.createClass({displayName: "LikeButton",
	getInitialState: function() {
	},
	render: function() {
		return (
				React.createElement("button", null, "Like")
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
