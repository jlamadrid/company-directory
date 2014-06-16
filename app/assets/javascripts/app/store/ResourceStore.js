Ext.define('CD.store.ResourceStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.Application',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: {
                callback: function(){

                    console.log('Autoload resource store ');

                    var resource = this.first();
                    console.log("Resource Name: " + resource.get('name') + " " + resource.get('description'));
                    console.log(resource.resourceAccess().getCount());

                    resource.resourceAccess().each(function(appAccess){
                        var access = appAccess;
                        var app = access.getResource();

                        console.log(app);
                    });
                }
            },

            autoSync: false,
            model: 'CD.model.Resource',
            storeId: 'resourceStoreId',
            proxy: {
                type: 'rest',
                url: '/api/resources',
                reader: {
                    type: 'json',
                    rootProperty: 'resources'
                }
            }
        }, cfg)]);
    }
});