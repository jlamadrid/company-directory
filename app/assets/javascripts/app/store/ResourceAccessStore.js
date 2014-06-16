Ext.define('CD.store.ResourceAccessStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.ResourceAccess',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            /*
            autoLoad: {
                callback: function(){
                    console.log('Autoload resource access store ');
                }
            },
            */
            autoSync: true,
            model: 'CD.model.ResourceAccess',
            storeId: 'resourceAccessStoreId',
            proxy: {
                type: 'rest',
                url: '/api/resource_accesses',
                reader: {
                    type: 'json',
                    rootProperty: 'resource_accesses'
                }
            }
        }, cfg)]);
    }
});