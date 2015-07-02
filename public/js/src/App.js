define(function (require) {
	'use strict';

	var Backbone = require('backbone'),
		Marionette = require('marionette');

	var App = new Backbone.Marionette.Application();

	var TestLayout = Backbone.Marionette.LayoutView.extend({
		template: '<p>This, not that, is your app.</p>'
	});

	App.addRegions({
		main: '#app-region'
	});

	App.on('start', function() {

		console.log('App starting!');

		App.main.show(new TestLayout());
	});

	return App;
});