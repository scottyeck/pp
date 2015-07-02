(function (window) {
	'use strict';

	var ENVIRONMENT = {};

	require.config({
		baseUrl: '/js/src',

		paths: {
			jquery: '../lib/jquery/jquery',
			underscore: '../lib/underscore/underscore',
			backbone: '../lib/backbone/backbone',
			'backbone.wreqr': '../lib/backbone.wreqr/backbone.wreqr',
			'backbone.babysitter': '../lib/backbone.babysitter/backbone.babysitter',
			marionette: '../lib/marionette/backbone.marionette',
			handlebars: '../lib/handlebars/handlebars',
			modernizr: '../lib/modernizr/modernizr',

			text: '../lib/requirejs-text/text',
			json: '../lib/requirejs-plugins/json'
		},

		shim: {
			jquery: {
				exports: 'jQuery'
			},
			underscore: {
				exports: '_'
			},
			backbone: {
				deps: [
					'underscore',
					'jquery'
				],
				exports: 'Backbone'
			},
			marionette: {
				deps: [
					'backbone',
					'backbone.wreqr',
					'backbone.babysitter'
				],
				exports: 'Backbone.Marionette'
			},
			'backbone.wreqr': {
				deps: [
					'backbone'
				],
				exports: 'Backbone.Wreqr'
			},
			'backbone.babysitter': {
				deps: [
					'backbone'
				],
				exports: 'Backbone.Babysitter'
			},
			handlebars: {
				exports: 'Handlebars'
			},
			Modernizr: {
				exports: 'Modernizr'
			}
		}
	});

	require(['jquery', 'App'], function ($, App, undefined) {
		$(function () {
			window.App = App;
			App.start(ENVIRONMENT);
		});
	});

}(this));