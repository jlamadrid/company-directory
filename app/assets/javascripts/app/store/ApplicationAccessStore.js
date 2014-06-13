Ext.define('CD.store.ApplicationAccessStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.ApplicationAccess',
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
                    console.log('Autoload application access store ');
                }
            },
            */
            autoSync: true,
            model: 'CD.model.ApplicationAccess',
            storeId: 'applicationAccessStoreId',
            proxy: {
                type: 'rest',
                url: '/api/application_accesses',
                reader: {
                    type: 'json',
                    rootProperty: 'application_accesses'
                }
            }
        }, cfg)]);
    }
});