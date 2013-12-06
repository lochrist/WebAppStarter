/*global TodoMVC */
'use strict';

ThePool.module('Ctrl', function (Ctrl, App, Backbone, Marionette, $, _) {
	// TodoList Router
	// ---------------
	//
	// Handle routes to show the active vs complete todo items
    Ctrl.Router = Marionette.AppRouter.extend({
		appRoutes: {
			'': 'loadRoot'
		}
	});

	// TodoList Controller (Mediator)
	// ------------------------------
	//
	// Control the workflow and logic that exists at the application
	// level, above the implementation detail of views and models
    Ctrl.Controller = Marionette.Controller.extend({

        initialize: function(options){
            this.stuff = options.stuff;
        },

        loadRoot: function(){
            console.log('router!');
        },

        start: function () {
            App.main.show(new App.Views.ItemView({
                model: new App.Models.Todo({
                })
            }));
        }

    });

	Ctrl.addInitializer(function () {
		var controller = new Ctrl.Controller();
		controller.router = new Ctrl.Router({
			controller: controller
		});

		controller.start();
	});
});
