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

    //height: 500,
    itemId: 'employeeForm',
    width: 475,
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
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'First Name:',
                            labelAlign: 'right',
                            name: 'fname'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Last Name:',
                            labelAlign: 'right',
                            name: 'lname'
                        },
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
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 10',
                            fieldLabel: 'Cell Phone',
                            labelAlign: 'right',
                            name: 'phone_cell'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 10',
                            fieldLabel: 'Home Phone',
                            labelAlign: 'right',
                            name: 'phone_home'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 10',
                            fieldLabel: 'Office Phone',
                            labelAlign: 'right',
                            name: 'phone_office'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 10',
                            fieldLabel: 'Email',
                            labelAlign: 'right',
                            name: 'email'
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
