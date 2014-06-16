Ext.define('CD.view.resource.ResourceMainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.resourcemainview',

    requires: [
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'resourcegrid',
                    region: 'center'
                },
                {
                    xtype: 'tabpanel',
                    region: 'south',
                    height: 150,
                    activeTab: 0,
                    resizable: true,
                    height: 450,
                    items: [
                        {
                            xtype: 'resourceaccessgrid',
                            title: 'Grants'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});