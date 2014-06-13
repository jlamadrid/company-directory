Ext.define('CD.model.Application', {
    extend: 'Ext.data.Model',
    alias: 'model.application',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'app_type'
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
            name: 'applicationAccess', //creates the getter getApplicationAccess
            model: 'CD.model.ApplicationAccess',
            associationKey: 'applicationAccess'
        }
    ]

    //hasMany: 'ApplicationAccess' /* generates applicationAccess() method on every Application instance */
});