class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|

      t.string :name
      t.string :app_type
      t.string :description
      t.string :technical_owner
      t.string :home_page
      t.string :ticket_url
      t.string :documentation_url
      t.string :business_owner

      t.timestamps
    end
  end
end
