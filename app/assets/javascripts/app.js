
Ext.Loader.setPath('Ext.ux', 'assets/app/ux');

Ext.application({
    name: 'CD',
    appFolder: 'assets/app',

    views : [

    ],

    models: [
        //'Employee' //un-commenting generates error ???
    ],

    stores: [
        'EmployeeStore',
        'TagStoreInMemory',
        'ApplicationStore',
        'ApplicationAccessStore'
    ],

    controllers: [
        'EmployeeController'
    ],

    launch : function() {

        Ext.create('CD.view.MainView');
    }
});
