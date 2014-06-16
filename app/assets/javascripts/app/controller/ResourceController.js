/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.controller.ResourceController', {
    extend: 'Ext.app.Controller',

    stores: [

    ],

    refs: [

    ],

    init: function(application) {

        this.control({

            "#resourceGridItemId": {
                select: this.resourceSelected
            }

        });
    },

    resourceSelected: function(target, record) {

        var resource_id = record.get('id');

        //filter application access store by application id
        var store = Ext.getStore('ResourceAccessStore');
        store.load();

        store.filter('resource_id', resource_id);
    }

});