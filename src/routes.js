"use strict";

var React = require('react');
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorsPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/notFoundPage');

var routes = (

    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Redirect from="/about-us" to="/about" />
        <Route path="*" component={NotFoundPage} />
    </Route>

);

module.exports = routes;