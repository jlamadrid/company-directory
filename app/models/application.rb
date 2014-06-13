class Application < ActiveRecord::Base

  has_many :application_accesses, dependent: :destroy

end
