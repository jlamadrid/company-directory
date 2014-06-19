Ext.define('CD.view.application.ApplicationForm', {
    extend: 'Ext.window.Window',
    alias : 'widget.applicationform',

    requires: ['Ext.form.Panel'],

    title : 'Application',
    layout: 'fit',
    autoShow: true,
    width: 350,
    itemId: 'applicationFormItemId',

    initComponent: function() {

        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    padding: '5 5 0 5',
                    border: false,
                    style: 'background-color: #fff;',

                    items: [
                        {
                            xtype: 'textfield',
                            name : 'name',
                            fieldLabel: 'Name'
                        },
                        {
                            xtype: 'textfield',
                            name : 'description',
                            fieldLabel: 'Description'
                        },
                        {
                            xtype: 'textfield',
                            name : 'home_page',
                            fieldLabel: 'Home Page'
                        },
                        {
                            xtype: 'textfield',
                            name : 'technical_owner',
                            fieldLabel: 'Technical Owner'
                        }
                    ]
                }
            ],

            buttons:[
                {
                    text: 'Save',
                    action: 'save'
                },
                {
                    text: 'Cancel',
                    scope: this,
                    handler: this.close
                }
            ]

        });

        me.callParent(arguments);
    }
});
