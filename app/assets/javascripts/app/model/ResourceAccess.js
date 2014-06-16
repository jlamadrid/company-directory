Ext.define('CD.model.ResourceAccess', {
    extend: 'Ext.data.Model',
    alias: 'model.resourceaccess',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'description'
        },
        {
            name: 'created_at',
            type: 'date'
        },
        {
            name: 'updated_at',
            type: 'date'
        }
    ],

    belongsTo: [
        {
            name: 'resource', //creates getApplication
            instanceName: 'resource',
            model: 'CD.model.Resource',
            getterName: 'getResource',
            setterName: 'setResource',
            associationKey: 'resource_id'
        }
    ]
});