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
        'TagStoreInMemory'
    ],

    controllers: [
        'EmployeeController'
    ],

    launch : function() {

        Ext.create('CD.view.MainView');
    }
});
