var App = React.createClass({displayName: "App",
	render: function() {
		return (
				React.createElement("h1", null, "lol")
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

React.render(React.createElement(App, null), document.getElementById("container"));
