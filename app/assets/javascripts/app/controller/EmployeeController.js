/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.controller.EmployeeController', {
    extend: 'Ext.app.Controller',

    stores: [
        'EmployeeStore'
    ],

    refs: [
        {
            ref: 'detailsPanel',
            selector: '#detailsPanel'
        },
        {
            ref: 'detailsToolbar',
            selector: '#detailsPanel #detailsToolbar'
        }
    ],

    init: function(application) {

        this.control({

            "#mainPanel #addButton": { //itemId: 'mainPanel'
                click: this.add
            },

            "#employeeForm #saveButton": {
                click: this.save
            },

            "#employeeForm #cancelButton": {
                click: this.cancelEdit
            }

        });
    },

    add: function(target) {

        var formWindow = Ext.create('widget.employeeform'),	// Create new form window
            form = formWindow.down('form').getForm(),		// Get form within window
            model = Ext.create('model.employee');			// Create new Record model - alias: 'model.employee',

        // Associate model with form
        form.loadRecord(model);

        // Show window
        formWindow.show();

    }

});