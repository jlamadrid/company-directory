class CreateResources < ActiveRecord::Migration
  def change

    create_table :resources do |t|

      t.string  :resource_type #application, network, email_group
      t.string  :name #when application is created a resource for it is auto created
      t.text    :description
      t.string  :tags

      t.timestamps
    end
  end
end
