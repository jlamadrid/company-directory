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

            "#employeeForm #saveButton": { //itemId: 'employeeForm',
                click: this.save
            },

            "#employeeForm #cancelButton": {
                click: this.cancelEdit
            },

            "#gridPanel": {
                select: this.view
            }

        });
    },

    add: function(target) {

        var formWindow = Ext.create('widget.employeeform'),	// Create new form window
            form = formWindow.down('form').getForm(),		// Get form within window
            model = Ext.create('model.employee',{});			// Create new Record model - alias: 'model.employee',

        // Associate model with form
        form.loadRecord(model);

        // Show window
        formWindow.show();

    },

    save: function(target) {

        var form = target.up('form').getForm(),			// Get parent form
            formWindow = target.up('window'),			// Get parent window
            detailsPanel = this.getDetailsPanel(),		// Get details panel
            detailsToolbar = this.getDetailsToolbar(),	// Get detail panel toolbar
            record = form.getRecord(),					// Get record associated with form
            store = this.getEmployeeStoreStore(),	    // Get Employee store
            isNew = !record.get('id');					// Is new if no record ID exists

        // Update associated record with form values
        var errors = form.updateRecord();

        // Valid
        if (form.isValid()) {

            // Add to store if new record
            if (isNew) {

                // Assign the record ID
                // Normally, this would be a generated ID
                //var id = store.getTotalCount() + 1;
                //record.set("id", id);

                // Add to store
                store.add(record);

            }

            // Commit changes
            store.commitChanges();

            // Update detail panel
            detailsPanel.update(record.data);

            // Close window
            formWindow.destroy();

        } else { // Invalid

            // Show errors on form
            form.markInvalid(errors);

        }

    },

    view: function(target, record) {

        var details = this.getDetailsPanel(),	// Get detail panel via controller ref
            toolbar = this.getDetailsToolbar();	// Get detail panel toolbar via controller ref

        // Update the detail panel with the selected row's data
        details.update(record.data);

        // Show toolbar
        toolbar.show();

    }

});