// src/app.js
import React from "react";
import ReactDOM from "react-dom";
import Title from "./title";

class WordCountBox extends React.Component {
	constructor(props, context, updater) {
		super(props, context, updater);
		this.state = {text: ""};
		// ???
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleTextChange(e) {
		this.setState({text: e.target.value});
	}
	render() {
		return (
			<div className="wordCountBox">
				<Title />
				<textarea rows="8" cols="0" placeholder="Type something..." autoFocus="true" onChange={this.handleTextChange}>
					{this.state.text}
				</textarea>
				<p>Count: {this.state.text.length}</p>
			</div>
		)
	}
}

ReactDOM.render(
	<WordCountBox />,
	document.getElementById("content")
);
