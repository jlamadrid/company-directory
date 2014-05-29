/*
 * File: app/view/MainView.js
 *
 */
Ext.define('CD.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [

    ],

    id: 'mainView',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    itemId: 'mainPanel',
                    resizable: false,
                    layout: 'border',
                    collapsed: false,
                    manageHeight: false,
                    title: 'Employees',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            itemId: 'mainToolbar',
                            items: [
                                {
                                    xtype: 'label'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'addButton',
                                    icon: 'resources/images/add.png',
                                    text: 'Add Employee'
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            region: 'west',
                            split: true,
                            border: '2 2 2 2',
                            id: '',
                            itemId: 'gridPanel',
                            width: 150,
                            resizable: false,
                            bodyBorder: true,
                            forceFit: true,
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'id',
                                    text: 'ID',
                                    format: '0'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'fname',
                                    text: 'First Name',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'lname',
                                    text: 'Last Name',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'Title',
                                    editor: {
                                        xtype: 'textfield'
                                    }
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'date',
                                    text: 'Date',
                                    editor: {
                                        xtype: 'datefield'
                                    }
                                },
                                {
                                    xtype: 'booleancolumn',
                                    dataIndex: 'isFeatured',
                                    text: 'Is Featured',
                                    editor: {
                                        xtype: 'checkboxfield'
                                    }
                                }
                            ],
                            plugins: [
                                Ext.create('Ext.grid.plugin.RowEditing', {

                                })
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            region: 'center',
                            split: true,
                            border: '2 2 2 2',
                            data: {

                            },
                            itemId: 'detailsPanel',
                            tpl: [
                                '<tpl if="values.id">',
                                '    <h1>{title}</h1>',
                                '    <p>',
                                '        {description}',
                                '    </p>',
                                '</tpl>',
                                '',
                                '<tpl if="!values.id">',
                                '    <h1>Please select a record</h1>',
                                '</tpl>'
                            ],
                            resizable: false,
                            layout: 'fit',
                            bodyBorder: true,
                            bodyPadding: '10 10 10 10',
                            manageHeight: false,
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    hidden: true,
                                    itemId: 'detailsToolbar',
                                    items: [
                                        {
                                            xtype: 'button',
                                            itemId: 'editButton',
                                            icon: 'resources/images/edit.png',
                                            text: 'Edit'
                                        },
                                        {
                                            xtype: 'tbseparator'
                                        },
                                        {
                                            xtype: 'button',
                                            itemId: 'removeButton',
                                            icon: 'resources/images/delete.png',
                                            text: 'Delete'
                                        }
                                    ]
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