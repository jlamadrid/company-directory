# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#IT employees
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

#Finance employees

garys = Employee.create(fname: 'Gary',
                        lname: 'Strunk',
                        title: 'Finance Lead',
                        department: 'Finance',
                        phone_cell: '201-555-6603',
                        phone_home: '333-393-4100',
                        phone_office: '973-301-3486',
                        email: 'garys@philadelphiafinancial.com',
                        is_manager: true,
                        tags: 'finance, accounting, monthly-close')

Employee.create(fname: 'Penny',
                lname: 'Hrib',
                title: 'Finance Analyst',
                department: 'Finance',
                phone_cell: '201-555-6603',
                phone_home: '333-393-4100',
                phone_office: '973-301-3486',
                email: 'garys@philadelphiafinancial.com',
                is_manager: false,
                manager_id: garys.id,
                tags: 'finance, accounting')

#Applications
Application.create(name: 'Solar',
                           app_type: 'Desktop',
                           description: 'Primary admin system managing our COLI block of business ......')

Application.create(name: 'FMDB',
                           app_type: 'Web',
                           description: 'System used to enter fund data ......')

Application.create(name: 'JIRA',
  app_type: 'Web',
  description: 'System used for entering support tickets')

# ---
app_solar = Resource.create(
    resource_type: 'application',
    name: 'Solar',
    description: 'Main admin system',
    tags: 'solar'
)

app_solar.resource_accesses.create(
    name: 'library 100',
    description: 'allow processing of the following business cases BOA, WF, etc'
)

app_solar.resource_accesses.create(
    name: 'library 300',
    description: 'allow processing of the following business cases ML, JPM, etc')

# ---

app_fmdb = Resource.create(
    resource_type: 'application',
    name: 'FMDB',
    description: 'Main fund system',
    tags: 'fmdb'
)

app_fmdb.resource_accesses.create(
    name: 'admin',
    description: 'allow admin access to create, update, or delete fund data; users should expect this
                access when working in the marketing dept and expected to interact with fund managers collecting fund data.')

app_fmdb.resource_accesses.create(
    name: 'read_only',
    description: 'allow access to read fund data')

# ---
app_jira = Resource.create(
    resource_type: 'application',
    name: 'JIRA',
    description: 'Main ticket system',
    tags: 'jira'
)

app_jira.resource_accesses.create(
    name: 'create_fmdb_tickets',
    description: 'allow access to create fmdb tickets')

app_jira.resource_accesses.create(
    name: 'jira_admin',
    description: 'allow access to create new jira projects and workflows')


app_jira.resource_accesses.create(
    name: 'create_solar_tickets',
    description: 'allow access to create solar tickets')
# ---


#EMAIL GROUP RESOURCES
# ---
email_group_solar = Resource.create(
    resource_type: 'email group',
    name: 'solar_admin',
    description: 'users that need notifications about solar events',
    tags: 'solar'
)

email_group_solar.resource_accesses.create(
    name: 'weekly_solar_update',
    description: 'receive weekly updates')


email_group_solar.resource_accesses.create(
    name: 'solar_new_case',
    description: 'receive notifications when a new case is added to solar.')

# ---

email_group_nightly_batch = Resource.create(
    resource_type: 'email group',
    name: 'nightly_batch',
    description: 'users that need notifications on nightly batch activity'
)

email_group_nightly_batch.resource_accesses.create(
    name: 'include_nightly',
    description: 'receive nightly batch emails')

email_group_nightly_batch.resource_accesses.create(
    name: 'include_weekly',
    description: 'receive weekly summary report emails')
# ---

email_group_fmdb = Resource.create(
    resource_type: 'email group',
    name: 'fmdb',
    description: 'users working with FMDB',
    tags: 'fmdb'
)

email_group_fmdb.resource_accesses.create(
    name: 'fmdb_outage',
    description: 'receive notifications when FMDB is in a maintenance period.')

email_group_fmdb.resource_accesses.create(
    name: 'fmdb_new_fund',
    description: 'receive notifications when a new fund is added to FMDB.')
# --

email_group_first_floor_east_batch = Resource.create(
    resource_type: 'email group',
    name: 'first-floor-east',
    description: 'users sitting in ...',
    tags: 'policy admin'
)

email_group_first_floor_east_batch.resource_accesses.create(
    name: 'include',
    description: 'include in emails to first floow east')
# ---


# NETWORK RESOURCES

# ---
network_nightly_batch = Resource.create(
    resource_type: 'network',
    name: 'solar-nightly-batch',
    description: 'directories for solar nightly batch operations',
    tags: 'solar'
)

network_nightly_batch.resource_accesses.create(
    name: 'read_only',
    description: 'users needing read access to nightly batch directories')

network_nightly_batch.resource_accesses.create(
    name: 'update',
    description: 'users needing read and UPDATE access to nightly batch directories')

# ---
network_fund_reports = Resource.create(
    resource_type: 'network',
    name: 'solar-fund-reports',
    description: 'users needing access to solar fund reports directories',
    tags: 'solar'
)

network_fund_reports.resource_accesses.create(
    name: 'full_admin',
    description: 'users needing full administrative access to fund report directories')


# ---
fmdb_directories = Resource.create(
    resource_type: 'network',
    name: 'fmdb-directories',
    description: 'directories for fmdb operations',
    tags: 'fmdb'
)

fmdb_directories.resource_accesses.create(
    name: 'read_only',
    description: 'users needing read access to fmdb directories')

fmdb_directories.resource_accesses.create(
    name: 'delete',
    description: 'users needing delete access to fmdb directories')

