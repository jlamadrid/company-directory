class ExtJsController < ApplicationController


  layout "extjs"

  #just here to comply with rails infrastructure. The corresponding html page is completely blank.
  #ExtJs completely renders view via javascript. app-main.html is the main bootstrap file
  def index

  end

end
