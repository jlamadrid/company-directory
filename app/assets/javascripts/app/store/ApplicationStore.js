Ext.define('CD.store.ApplicationStore', {
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
                    console.log('Autoload application store ');
                    var application = this.first();
                    console.log("Name: " + application.get('name') + " " + application.get('description'));
                    console.log(application.applicationAccess().getCount());

                    application.applicationAccess().each(function(appAccess){
                        var access = appAccess;
                        var app = access.getApplication();

                        console.log(app);
                    });
                }
            },

            autoSync: false,
            model: 'CD.model.Application',
            storeId: 'applicationStoreId',
            proxy: {
                type: 'rest',
                url: '/api/applications',
                reader: {
                    type: 'json',
                    rootProperty: 'applications'
                }
            }
        }, cfg)]);
    }
});