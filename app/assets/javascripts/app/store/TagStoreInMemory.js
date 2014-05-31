/**
 * Created by Juan on 5/31/14.
 */
Ext.define('CD.store.TagStoreInMemory', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.Tag',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'CD.model.Tag',
            storeId: 'tagStoreInMemoryID',
            autoLoad: 'true',
            data: [
                {
                    tag: 'solar'
                },
                {
                    tag: 'manager-apl'
                },
                {
                    tag: 'manager-apps'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});