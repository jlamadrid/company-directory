/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.view.employee.EmployeeForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.employeeform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],

    itemId: 'employeeForm',
    //width: 475,
    layout: 'fit',
    manageHeight: false,
    title: 'Edit Employee',
    modal: true,

    initComponent: function() {
        var me = this;

        var store = Ext.getStore('EmployeeStore');

        var managers = [];
        store.each(function(rec){
            if(rec.get('is_manager') == true){
                managers.push(rec);
            }
        });

        var comboStore =  Ext.create('Ext.data.Store', {
            model: 'CD.model.Employee',
            data : managers
        });

        //The combo box listing managers
        var cmbManager = Ext.create('Ext.form.ComboBox', {

            fieldLabel: 'Manager',
            name: 'manager_id',
            store: comboStore,
            queryMode: 'local',
            valueField: 'id',
            emptyText: 'Reports to ...',

            // Template for the dropdown menu.
            // Note the use of "x-boundlist-item" class,
            // this is required to make the items selectable.
            tpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                '<div class="x-boundlist-item">{fname} {lname}</div>',
                '</tpl>'
            ),

            // template for the content inside text field
            displayTpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                '{fname} {lname}',
                '</tpl>'
            )
        });

        var cmbTags = Ext.create('Ext.form.field.ComboBox', {
            fieldLabel: 'Tags',
            name: 'tags',
            multiSelect: true,
            displayField: 'tag',
            store: 'TagStoreInMemory',
            forceSelection: 'true',
            //typeAhead: true,
            valueField: 'tag'
        });

        Ext.applyIf(me, {
            bodyStyle: {
                'background-color': '#fff'
            },

            items: [
                {
                    xtype: 'form',
                    border: 0,
                    itemId: 'form',
                    layout: 'auto',
                    bodyBorder: false,
                    bodyPadding: 10,
                    manageHeight: false,
                    title: '',

                    fieldDefaults: {
                        labelAlign: 'right',
                        labelWidth: 90,
                        msgTarget: 'qtip'
                    },

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Basic Contact Info',
                            defaultType: 'textfield',
                            layout: 'anchor',

                            defaults: {
                                anchor: '100%'
                            },

                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    fieldLabel: 'Name',
                                    layout: 'hbox',
                                    combineErrors: true,
                                    defaultType: 'textfield',

                                    defaults: {
                                        hideLabel: 'true'
                                    },

                                    items: [{
                                        name: 'fname',
                                        fieldLabel: 'First Name',
                                        flex: 2,
                                        emptyText: 'First',
                                        allowBlank: false
                                    }, {
                                        name: 'lname',
                                        fieldLabel: 'Last Name',
                                        flex: 3,
                                        margins: '0 0 0 6',
                                        emptyText: 'Last',
                                        allowBlank: false
                                    }]
                                },

                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    defaultType: 'textfield',
                                    margin: '0 0 5 0',
                                    items: [{
                                        fieldLabel: 'Email Address',
                                        name: 'email',
                                        vtype: 'email',
                                        flex: 1,
                                        allowBlank: false
                                    }, {
                                        fieldLabel: 'Office Number',
                                        labelWidth: 100,
                                        name: 'phone_office',
                                        width: 200,
                                        emptyText: 'xxx-xxx-xxxx',
                                        maskRe: /[\d\-]/,
                                        regex: /^\d{3}-\d{3}-\d{4}$/,
                                        regexText: 'Must be in the format xxx-xxx-xxxx'
                                    }]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Role Info',
                            defaultType: 'textfield',
                            layout: 'anchor',

                            defaults: {
                                anchor: '100%'
                            },

                            items: [
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 10',
                                    fieldLabel: 'Title',
                                    labelAlign: 'right',
                                    name: 'title',
                                    validateBlank: true
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 10',
                                    fieldLabel: 'Department',
                                    labelAlign: 'right',
                                    name: 'department'
                                },
                                cmbManager
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Other Phone Numbers',
                            defaultType: 'textfield',
                            layout: 'anchor',

                            defaults: {
                                anchor: '100%'
                            },

                            items: [
                                {
                                    margin: '0 0 10',
                                    fieldLabel: 'Cell Phone',
                                    labelAlign: 'right',
                                    name: 'phone_cell',
                                    emptyText: 'xxx-xxx-xxxx',
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{3}-\d{3}-\d{4}$/,
                                    regexText: 'Must be in the format xxx-xxx-xxxx'
                                },
                                {
                                    margin: '0 0 10',
                                    fieldLabel: 'Home Phone',
                                    labelAlign: 'right',
                                    name: 'phone_home',
                                    emptyText: 'xxx-xxx-xxxx',
                                    maskRe: /[\d\-]/,
                                    regex: /^\d{3}-\d{3}-\d{4}$/,
                                    regexText: 'Must be in the format xxx-xxx-xxxx'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'About',
                            defaultType: 'textfield',
                            margin: '0 0 5 0',

                            items: [
                                cmbTags
                            ]
                        },
                        {
                            xtype: 'container',
                            padding: '10 10 10 10',
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'saveButton',
                                    margin: '5 5 5 5 ',
                                    text: 'Save'
                                },
                                {
                                    xtype: 'button',
                                    id: 'cancelButton',
                                    margin: '5 5 5 5',
                                    text: 'Cancel'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
