class ResourceAccessSerializer < ActiveModel::Serializer

  self.root = false

  attributes :id, :resource_id, :name, :description, :created_at, :updated_at

  def description
    object.description
  end
end
