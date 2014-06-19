#https://github.com/rails-api/active_model_serializers
class ApplicationSerializer < ActiveModel::Serializer

  attributes :id, :name, :app_type, :description, :technical_owner, :home_page, :ticket_url, :documentation_url, :business_owner, :created_at, :updated_at

end