Ext.define('CD.model.Resource', {
    extend: 'Ext.data.Model',
    alias: 'model.resource',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'resource_type'
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

    hasMany: [
        {
            name: 'resourceAccess', //creates the getter getApplicationAccess
            model: 'CD.model.ResourceAccess',
            associationKey: 'resourceAccess'
        }
    ]
});