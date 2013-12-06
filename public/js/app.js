/*global Backbone */
'use strict';

var ThePool = new Backbone.Marionette.Application();

ThePool.addRegions({
	header: '#header',
	main: '#main',
	footer: '#footer'
});

ThePool.on('initialize:after', function () {
	Backbone.history.start();
});
