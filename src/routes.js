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
    <Route name="app" path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route name="authors" path="authors" component={AuthorsPage} />
        <Route name="about" path="authors" component={AboutPage} />
        <Route path="*" component={NotFoundPage} />
        <Redirect from="about-us" to="about" />
        <Redirect from="awthurs" to="authors" />
    </Route>
);

module.exports = routes;