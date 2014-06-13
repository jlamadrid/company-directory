# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



kimj = Employee.create(fname: 'Kim',
                       lname: 'Jacques',
                       title: 'CIO',
                       department: 'IT',
                       phone_cell: '201-555-6603',
                       phone_home: '333-393-4100',
                       phone_office: '973-301-3486',
                       email: 'kjacques@philadelphiafinancial.com',
                       is_manager: true,
                       tags: 'cio')

garyf = Employee.create(fname: 'Gary',
                        lname: 'Francis',
                        title: 'IT Manager',
                        department: 'IT',
                        phone_cell: '201-201-2223',
                        phone_home: '308-493-2100',
                        phone_office: '473-401-3336',
                        email: 'gfrancis@philadelphiafinancial.com',
                        is_manager: true,
                        manager_id: kimj.id,
                        tags: 'manager-apl, manager-applications')

Employee.create(fname: 'Joe',
                lname: 'Catalfamo',
                title: 'BA Manager',
                department: 'IT',
                phone_cell: '222-222-2222',
                phone_home: '333-333-3333',
                phone_office: '444-444-4444',
                email: 'jcatalfamo@philadelphiafinancial.com',
                is_manager: true,
                manager_id: kimj.id,
                tags: 'nightly-support, solar, manager-apl' )

Employee.create(fname: 'Juan',
                lname: 'Lamadrid',
                title: 'Senior Systems Analyst',
                department: 'IT',
                phone_cell: '201-401-6603',
                phone_home: '908-393-4100',
                phone_office: '973-301-3486',
                email: 'jlamadrid@philadelphiafinancial.com',
                is_manager: false,
                manager_id: garyf.id,
                tags: 'applications, fmdb, on-call')

Employee.create(fname: 'Derryl',
                lname: 'Varghese',
                title: 'Senior Developer',
                department: 'IT',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'dvarghese@philadelphiafinancial.com',
                is_manager: false,
                manager_id: garyf.id,
                tags: 'applications, reportal')

Employee.create(fname: 'Kathy',
                lname: 'Iantosca',
                title: 'Project Manager',
                department: 'IT',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'kiantosca@philadelphiafinancial.com',
                is_manager: false,
                manager_id: kimj.id,
                tags: 'pmo')

Employee.create(fname: 'Bob',
                lname: 'Consultant',
                title: 'Citrix Consultant',
                department: 'IT',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'bobc@philadelphiafinancial.com',
                is_manager: false,
                manager_id: kimj.id,
                tags: 'citrix')

#HR Employees
kkilbane = Employee.create(fname: 'Ken',
                lname: 'Kilbane',
                title: 'HR Manager',
                department: 'HR',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'kkilbane@philadelphiafinancial.com',
                is_manager: true,
                tags: 'hr')

Employee.create(fname: 'Ally',
                lname: 'Spaventa',
                title: 'HR Generalist',
                department: 'HR',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'aspaventa@philadelphiafinancial.com',
                is_manager: false,
                manager_id: kkilbane.id,
                tags: 'on-boarding, new-hire')

Employee.create(fname: 'Jane',
                lname: 'Human',
                title: 'HR Consultant',
                department: 'HR',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'janeh@philadelphiafinancial.com',
                is_manager: false,
                manager_id: kkilbane.id,
                tags: 'consultant')


solar = Application.create(name: 'Solar',
                   app_type: 'Desktop',
                   description: 'Primary admin system managing our COLI block of business ......')

fmdb = Application.create(name: 'FMDB',
                   app_type: 'Web',
                   description: 'System used to enter fund data ......')

jira = Application.create(name: 'JIRA',
                   app_type: 'Web',
                   description: 'System used for entering support tickets')

solar.application_accesses.create(
    name: 'library 100',
    description: 'allow processing of the following business cases BOA, WF, etc')

fmdb.application_accesses.create(
    name: 'admin',
    description: 'allow admin access to create, update, or delete fund data')