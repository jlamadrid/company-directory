module Api

  class ResourcesController < ApplicationController

    before_action :set_resource, only: [:show, :update, :destroy]
    respond_to :json

    #GET http://server:port/api/resources
    def index

      @resources = Resource.all

      #render :json => { :success => true, :data =>  @resources }
      render json: @resources
    end

    #GET http://server:port/api/resources/1
    def show
      render json: @resource
    end

    #POST
    def create

      @resource = Resource.new(resource_params)

      if @resource.save
        render :json => { :success => true, :data => @resource }, :status => :created
      else
        render :json => { :success => false, :errors => @resource.errors }, :status => :unprocessable_entity
      end
    end

    def update

      #http://stackoverflow.com/questions/6770350/rails-update-attributes-without-save
      @resource.attributes = resource_params

      #if @resource.update_attributes(resource_params)
      if @resource.save
        render :json => { :success => true }
      else
        render :json => { :success => false, :errors => @resource.errors }, :status => :unprocessable_entity
      end
    end

    def destroy
      if @resource.destroy
        render :json => { :success => true }
      else
        render :json => { :success => false }
      end
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_resource
      @resource = Resource.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resource_params
      params.require(:resource).permit(:name, :type, :description, :created_at, :updated_at)
    end

  end

end
