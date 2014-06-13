module Api

  class ApplicationsController < ApplicationController

    before_action :set_application, only: [:show]
    respond_to :json

    #GET http://server:port/api/employees
    def index

      @applications = Application.all

      render :json => { :success => true, :data =>  @applications }
    end

    #GET http://server:port/api/employees/1
    def show
      render :json => { :success => true, :data => @application }
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_application
      @application = Application.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def application_params
      params.require(:application).permit(:name, :type, :description, :access_email, :created_at, :updated_at)
    end

  end

end
