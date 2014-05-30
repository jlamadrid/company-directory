class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.string :fname
      t.string :lname
      t.integer :manager_id
      t.boolean :is_manager
      t.string :title
      t.string :department
      t.string :phone_cell
      t.string :phone_home
      t.string :phone_office
      t.string :email
      t.string :tags

      t.timestamps
    end
  end
end
