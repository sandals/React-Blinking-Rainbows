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
	render: function() {
		return (
				React.createElement("button", null, "♥ Like This Crap")
		);
	}
});

React.render(React.createElement(App, null), document.getElementById("container"));
