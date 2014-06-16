#https://github.com/rails-api/active_model_serializers
class ApplicationSerializer < ActiveModel::Serializer

  attributes :id, :name, :app_type, :description, :created_at, :updated_at

end
