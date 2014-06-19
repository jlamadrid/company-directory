module Api

  class ApplicationsController < ApplicationController

    before_action :set_application, only: [:show, :update]
    respond_to :json

    #GET http://server:port/api/employees
    def index

      @applications = Application.all

      #render :json => { :success => true, :data =>  @applications }
      render json: @applications
    end

    #GET http://server:port/api/employees/1
    def show
      render json: @application
    end

    def update

      @application.attributes = application_params

      #if @employee.update_attributes(employee_params)
      if @application.save
        render :json => { :success => true }
      else
        render :json => { :success => false, :errors => @application.errors }, :status => :unprocessable_entity
      end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_application
      @application = Application.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def application_params
      params.require(:application).permit(:id, :name, :app_type, :description, :technical_owner, :home_page, :ticket_url, :documentation_url, :business_owner, :created_at, :updated_at)
    end

  end

end