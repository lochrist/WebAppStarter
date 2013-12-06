/*global TodoMVC */
'use strict';

ThePool.module('Models', function (Models, App, Backbone) {
	// Todo Model
	// ----------

    Models.Todo = Backbone.Model.extend({
		defaults: {
			title: 'default title',
			completed: false,
			created: 0
		},

		initialize: function () {
			if (this.isNew()) {
				this.set('created', Date.now());
			}
		},

		toggle: function () {
			return this.set('completed', !this.isCompleted());
		},

		isCompleted: function () {
			return this.get('completed');
		}
	});

	// Todo Collection
	// ---------------
    Models.TodoList = Backbone.Collection.extend({
		model: Models.Todo,

		localStorage: new Backbone.LocalStorage('todos-backbone-marionette'),

		getCompleted: function () {
			return this.filter(this._isCompleted);
		},

		getActive: function () {
			return this.reject(this._isCompleted);
		},

		comparator: function (todo) {
			return todo.get('created');
		},

		_isCompleted: function (todo) {
			return todo.isCompleted();
		}
	});
});
