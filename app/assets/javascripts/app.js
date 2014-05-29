/*
 * File: app.js
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({

    requires: [

    ],

    models: [
    ],

    stores: [
    ],

    appFolder: 'assets/app',

    controllers: [
    ],

    enableQuickTips: false,
    name: 'CD',

    /**
     * This function will be called after all the application's controllers are initialized and this means that the
     * application is completely loaded. So this function is a good place to instantiate our main view.
     */
    launch: function() {

        //Ext.create('CD.view.MyViewport');
    }

});
