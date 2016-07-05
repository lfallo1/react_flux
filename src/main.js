"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var history = require('react-router').useRouterHistory;
var routes = require('./routes');

ReactDom.render(
	<Router history={history}>{routes}</Router>,
	document.getElementById('app')
);
