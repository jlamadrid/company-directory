module Api

  class ApplicationAccessesController < ApplicationController

    before_action :set_application_accesses, only: [:show, :update]
    respond_to :json

    def index

      @application_accesses = ApplicationAccess.all

      #render :json => { :success => true, :data =>  @applications }
      render json: @application_accesses
    end

    def show
      render json: @application_access
    end


    #POST
    def create

      @application_access = ApplicationAccess.new(access_params)

      if @application_access.save
        render :json => { :success => true, :data => @application_access }, :status => :created
      else
        render :json => { :success => false, :errors => @application_access.errors }, :status => :unprocessable_entity
      end
    end

    def update

      @application_access.attributes = access_params

      #if @employee.update_attributes(employee_params)
      if @application_access.save
        render :json => { :success => true }
      else
        render :json => { :success => false, :errors => @application_access.errors }, :status => :unprocessable_entity
      end
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_application_accesses
      @application_access = ApplicationAccess.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def access_params
      params.require(:application_access).permit(:name, :description, :application_id, :created_at, :updated_at)
    end

  end

end
