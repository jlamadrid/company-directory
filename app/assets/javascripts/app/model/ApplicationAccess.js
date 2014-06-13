Ext.define('CD.model.ApplicationAccess', {
    extend: 'Ext.data.Model',
    alias: 'model.applicationaccess',

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
            name: 'application', //creates getApplication
            instanceName: 'application',
            model: 'CD.model.Application',
            getterName: 'getApplication',
            setterName: 'setApplication',
            associationKey: 'application_id'
        }
    ]
    //belongsTo: 'Application' /* creates getApplication() */
});