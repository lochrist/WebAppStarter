/*global TodoMVC */
'use strict';

ThePool.module('Views', function (Views, App, Backbone, Marionette, $) {
	// Todo List Item View
	// -------------------
	//
	// Display an individual todo item, and respond to changes
	// that are made to the item, including marking completed.
	Views.ItemView = Marionette.ItemView.extend({
		tagName: 'div',
		template: '#template-todoItemView',

        initialize: function (options) {

        }

	});
});
