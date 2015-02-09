var App = React.createClass({
	render: function() {
		return (
				<Article title="Hello World" body="Wow mane like this is so kewl and things." />
		);
	}
});

var Article = React.createClass({
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
			return <h1><Blink>{this.props.title}</Blink></h1>;
		}
		else {
			return <h1>{this.props.title}</h1>
		}
	},
	likedBodyText: function() {
		if (this.state.likes > 0) {
			return <Blink pollInterval={1000}><p className="rainbow">{this.props.body}</p></Blink>
		}
		else {
			return <p>{this.props.body}</p>;
		}
	},
	render: function() {
		return (
			<div className={this.articleClassName()}>
				{this.likedTitle()} {this.likedBodyText()}
				<LikeButton onClick={this.updateLikes} /> 
				<span className="likes-amount">{this.state.likes} {this.likesAmount()}</span> 
			</div>
		);
	}
});

var LikeButton = React.createClass({
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
				<button className={this.buttonClass()} onClick={this.handleClick}>{this.buttonText()}</button>
				);
	}
});

var Blink = React.createClass({
	getDefaultProps: function() {
		return { pollInterval: 500 };
	},
	getInitialState: function() {
		setInterval(this.toggleVisibility, this.props.pollInterval);

		return {
			visible: true
		};
	},
	toggleVisibility: function() {
		this.setState({
			visible: !this.state.visible
		});
	},
	getRandomColor: function() {
		var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'cyan'];
		return colors[Math.floor(Math.random() * colors.length)];
	},
	render: function() {
		var style = {
			color: this.getRandomColor(),
			visibility: this.state.visible ? 'visible' : 'hidden'
		};
		return (<span style={style}>{this.props.children}</span>);
	}
});

React.render(<App />, document.getElementById("container"));
