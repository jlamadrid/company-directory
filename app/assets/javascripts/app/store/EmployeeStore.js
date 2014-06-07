/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.store.EmployeeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.Employee',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: {
                callback: function(){
                    console.log('Autoload employee store ');

                    var employee = this.first();
                    console.log("Employee Name: " + employee.get('fname') + " " + employee.get('lname'));
                }
            },

            groupField:'department',

            autoSync: false,
            model: 'CD.model.Employee',
            storeId: 'employeeStoreId',
            proxy: {
                type: 'rest',
                url: '/api/employees',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});