/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.view.EmployeeForm', {
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
                                        name: 'phone-office',
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
                                    fieldLabel: 'Dept.',
                                    labelAlign: 'right',
                                    name: 'department'
                                }
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
