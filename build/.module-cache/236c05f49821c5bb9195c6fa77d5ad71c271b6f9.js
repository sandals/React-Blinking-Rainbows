var App = React.createClass({displayName: "App",
	render: function() {
		return (
			React.createElement(LikeButton, null)
		);
	}
});

var LikeButton = React.createClass({displayName: "LikeButton",
	render: function() {
		return (
				React.createElement("p", null, "Lol")
		);
	}
});

React.render(React.createElement(App, null), document.body);
