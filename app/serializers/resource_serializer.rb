class ResourceSerializer < ActiveModel::Serializer

  self.root = false

  attributes :id, :name, :resource_type, :description, :tags, :created_at, :updated_at

  has_many :resource_accesses, key: :resourceAccess
end
