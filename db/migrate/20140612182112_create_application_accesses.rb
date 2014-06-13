class CreateApplicationAccesses < ActiveRecord::Migration
  def change
    create_table :application_accesses do |t|

      t.belongs_to :application
      t.string :description
      t.string :name

      t.timestamps
    end
  end
end
