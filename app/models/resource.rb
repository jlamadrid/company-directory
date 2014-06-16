class Resource < ActiveRecord::Base

  has_many :resource_accesses, dependent: :destroy

end
