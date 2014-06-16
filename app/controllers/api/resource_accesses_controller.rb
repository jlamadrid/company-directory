module Api

  class ResourceAccessesController < ApplicationController

    before_action :set_resource_accesses, only: [:show, :update, :destroy]
    respond_to :json

    def index

      @resource_accesses = ResourceAccess.all

      #render :json => { :success => true, :data =>  @resources }
      render json: @resource_accesses
    end

    def show
      render json: @resource_access
    end


    #POST
    def create

      @resource_access = ResourceAccess.new(resource_access_params)

      if @resource_access.save
        render :json => { :success => true, :data => @resource_access }, :status => :created
      else
        render :json => { :success => false, :errors => @resource_access.errors }, :status => :unprocessable_entity
      end
    end

    def update

      @resource_access.attributes = resource_access_params

      #if @employee.update_attributes(employee_params)
      if @resource_access.save
        render :json => { :success => true }
      else
        render :json => { :success => false, :errors => @resource_access.errors }, :status => :unprocessable_entity
      end
    end

    def destroy
      if @resource_access.destroy
        render :json => { :success => true }
      else
        render :json => { :success => false }
      end
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_resource_accesses
      @resource_access = ResourceAccess.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resource_access_params
      params.require(:resource_access).permit(:name, :description, :resource_id, :created_at, :updated_at)
    end

  end

end
