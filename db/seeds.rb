# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


garyf = Employee.create(fname: 'Gary',
                        lname: 'Francis',
                        title: 'IT Manager',
                        department: 'IT',
                        phone_cell: '201-201-2223',
                        phone_home: '308-493-2100',
                        phone_office: '473-401-3336',
                        email: 'gfrancis@philadelphiafinancial.com',
                        is_manager: true,
                        tags: 'manager-apl, manager-java')

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
                tags: 'applications, fmdb')

Employee.create(fname: 'Joe',
                lname: 'Catalfamo',
                title: 'Senior BA',
                department: 'IT',
                phone_cell: '222-222-2222',
                phone_home: '333-333-3333',
                phone_office: '444-444-4444',
                email: 'jcatalfamo@philadelphiafinancial.com',
                is_manager: true,
                tags: 'nightly_support, solar')

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
                tags: 'applications, fmdb, reportal')


#Tags provide the following ability: filter employees involved in specific tasks, initiatives, that have certain skill sets, etc