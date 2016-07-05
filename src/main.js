"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var routes = require('./routes');

ReactDom.render(
	<Router history={browserHistory}>{routes}</Router>,
	document.getElementById('app')
);
