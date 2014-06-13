class ApplicationAccessSerializer < ActiveModel::Serializer

  self.root = false

  attributes :id, :application_id, :name, :description, :created_at, :updated_at

  def description
    object.description
  end
end
