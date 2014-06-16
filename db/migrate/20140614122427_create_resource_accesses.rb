class CreateResourceAccesses < ActiveRecord::Migration
  def change
    create_table :resource_accesses do |t|

      t.belongs_to  :resource

      t.string      :name
      t.string      :description

      t.timestamps
    end
  end
end
