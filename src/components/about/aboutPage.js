"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		onEnter: function(transition, params, query, callback) {
			console.log('transitioning to about page');
		},

		onLeave: function(transition, component) {
			console.log('transitioning away from about page');
		}
	},
	render: function () {
		return (
			<div>
				<h1>About</h1>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
			</div>
		); 
	}
});

module.exports = About;